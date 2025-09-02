import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator, 
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
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

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Quero Ler", value: "Quero Ler" },
    { label: "Lendo", value: "Lendo" },
    { label: "Lido", value: "Lido" },
  ]);

  const handleDateChange = (text) => {
    let formattedText = text.replace(/[^0-9]/g, ""); 
    
    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + "/" + formattedText.slice(2);
    }
    if (formattedText.length > 5) {
      formattedText = formattedText.slice(0, 5) + "/" + formattedText.slice(5, 9);
    }
    
    setDataLancamento(formattedText);
  };

  function handleAddBook() {
    if (!titulo || !autor) {
      Alert.alert("Erro", "Preencha título e autor!");
      return;
    }
    
    const dataFormatada = formatarDataParaYYYYMMDD(dataLancamento);

    const livro = {
      titulo,
      autor,
      status,
      dataLancamento: dataFormatada,
      numPaginas: numPaginas || null,
      avaliacao: status === "Lido" ? avaliacao : 0,
    };

    setLoading(true);
    setTimeout(() => {
      Alert.alert(
        "Sucesso", 
        `Livro "${titulo}" adicionado com avaliação de ${status === "Lido" ? avaliacao : 0} estrela(s)!`
      );
      setTitulo("");
      setAutor("");
      setStatus("Quero Ler");
      setDataLancamento("");
      setNumPaginas("");
      setAvaliacao(0);
      setLoading(false);
      navigation.goBack();
    }, 800);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
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