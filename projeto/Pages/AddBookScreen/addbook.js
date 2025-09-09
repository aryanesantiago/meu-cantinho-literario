import React, { useState, useEffect } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Alert, 
  ActivityIndicator, ScrollView, Platform, KeyboardAvoidingView, Image 
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { db, auth } from "../../firebaseConfig";
import { setDoc, doc, Timestamp } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";

import styles from "./styles"; 

function formatarDataParaYYYYMMDD(data) {
  if (!data) return null;
  const partes = data.split('/');
  if (partes.length === 3) {
    return `${partes[2]}-${partes[1]}-${partes[0]}`;
  }
  return data;
}

export default function AddBookScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [status, setStatus] = useState("Quero Ler");
  const [dataLancamento, setDataLancamento] = useState(""); 
  const [numPaginas, setNumPaginas] = useState(""); 
  const [avaliacao, setAvaliacao] = useState(0); 
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Quero Ler", value: "Quero Ler" },
    { label: "Lendo", value: "Lendo" },
    { label: "Lido", value: "Lido" },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Conceda acesso à câmera e galeria.");
      return;
    }

    Alert.alert(
      "Selecionar Imagem",
      "Escolha uma opção:",
      [
        {
          text: "Câmera",
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.canceled) setImage(result.assets[0].uri);
          },
        },
        {
          text: "Galeria",
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.canceled) setImage(result.assets[0].uri);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  const handleDateChange = (text) => {
    let formattedText = text.replace(/[^0-9]/g, ""); 
    if (formattedText.length > 2) formattedText = formattedText.slice(0, 2) + "/" + formattedText.slice(2);
    if (formattedText.length > 5) formattedText = formattedText.slice(0, 5) + "/" + formattedText.slice(5, 9);
    setDataLancamento(formattedText);
  };

  const handleAddBook = async () => {
    if (!titulo || !autor) {
      Alert.alert("Erro", "Preencha título e autor!");
      return;
    }

    if (!user) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }

    setLoading(true);

    try {
      let localImageUri = null;

      if (image) {
        const fileName = `${Date.now()}_${titulo}.jpg`;
        const dest = FileSystem.documentDirectory + fileName;
        await FileSystem.copyAsync({ from: image, to: dest });
        localImageUri = dest;
      }

      const livro = {
        titulo,
        autor,
        status,
        dataLancamento: formatarDataParaYYYYMMDD(dataLancamento),
        numPaginas: numPaginas || null,
        avaliacao: status === "Lido" ? avaliacao : 0,
        imagem: localImageUri,
        criadoEm: Timestamp.now(),
      };

      const livroRef = doc(db, "usuarios", user.uid, "livros", `${Date.now()}`);
      await setDoc(livroRef, livro);

      Alert.alert("Sucesso", `Livro "${titulo}" adicionado!`);

   
      setTitulo("");
      setAutor("");
      setStatus("Quero Ler");
      setDataLancamento("");
      setNumPaginas("");
      setAvaliacao(0);
      setImage(null);

      navigation.goBack();

    } catch (error) {
      console.log("Erro Firebase:", error);
      Alert.alert("Erro", "Não foi possível adicionar o livro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} 
    >
      <ScrollView
        contentContainerStyle={{ ...styles.container, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Adicione seu livro favorito!</Text>

          <Text style={styles.label}>Título *</Text>
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Digite o título"
          />

          <Text style={styles.label}>Autor *</Text>
          <TextInput
            style={styles.input}
            value={autor}
            onChangeText={setAutor}
            placeholder="Digite o autor"
          />

          <Text style={styles.label}>Status *</Text>
          <DropDownPicker
            open={open}
            value={status}
            items={items}
            setOpen={setOpen}
            setValue={setStatus}
            setItems={setItems}
            placeholder="Selecione o status"
            style={styles.dropdown}
            listMode="SCROLLVIEW"
            dropDownContainerStyle={styles.dropdownContainer}
          />

          <Text style={styles.label}>Data de Lançamento</Text>
          <TextInput
            style={styles.input}
            value={dataLancamento}
            onChangeText={handleDateChange}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            maxLength={10}
          />

          <Text style={styles.label}>Número de Páginas</Text>
          <TextInput
            style={styles.input}
            value={numPaginas}
            onChangeText={setNumPaginas}
            placeholder="Número de páginas"
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
  <Ionicons name="camera" size={24} color="#661414" style={styles.imageButtonIcon} />
  <Text style={styles.imageButtonText}>
    {image ? "Trocar Imagem" : "Adicionar Imagem"}
  </Text>
</TouchableOpacity>

{image && (
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: image }}
      style={styles.imagePreview}
      resizeMode="cover"
    />

    <TouchableOpacity
      style={styles.removeImageButton}
      onPress={() => setImage(null)}
    >
      <Ionicons name="trash" size={20} color="#661414" />
      <Text style={styles.removeImageText}>Remover Imagem</Text>
    </TouchableOpacity>
  </View>
)}



          <Text style={styles.label}>Avaliação</Text>
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => status === "Lido" && setAvaliacao(num)}
                disabled={status !== "Lido"}
              >
                <Ionicons
                  name={num <= avaliacao ? "star" : "star-outline"}
                  size={30}
                  color={status === "Lido" ? "#f1c40f" : "#ccc"}
                  style={{ marginRight: 5 }}
                />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleAddBook}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Adicionar Livro</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
