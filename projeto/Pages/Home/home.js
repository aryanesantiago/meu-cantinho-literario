import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native"; 
import { db, auth } from "../../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import styles from "./styles";

const filtros = ["Todos", "Lendo", "Lido", "Quero Ler"];

export default function HomeScreen() {
  const [buscar, setBuscar] = useState("");
  const [livros, setLivros] = useState([]);
  const [livrosOriginais, setLivrosOriginais] = useState([]);
  const [filtro, setFiltro] = useState("Todos");
  const navigation = useNavigation();
  const route = useRoute(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
    if (!currentUser) return;

    const filtroInicial = route.params?.filtro
      ? 
        route.params.filtro.charAt(0).toUpperCase() + route.params.filtro.slice(1)
      : "Todos";

    setFiltro(filtroInicial);
    const unsubscribe = buscarLivros(filtroInicial, currentUser);
    return unsubscribe;
  }, [route.params]);

  const buscarLivros = (statusFiltro, currentUser) => {
    let livrosRef = collection(db, "usuarios", currentUser.uid, "livros");
    let q =
      statusFiltro === "Todos"
        ? livrosRef
        : query(livrosRef, where("status", "==", statusFiltro));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setLivros(lista);
      setLivrosOriginais(lista);
    });
    return unsubscribe;
  };

  const generosUnicos = [...new Set(livrosOriginais.map(livro => livro.genero))].filter(Boolean);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {item.imagem ? (
        <Image source={{ uri: item.imagem }} style={styles.capa} />
      ) : (
        <View style={styles.placeholder}><Text>📖</Text></View>
      )}
      <Text numberOfLines={1} style={styles.tituloLivro}>{item.titulo}</Text>
      <Text numberOfLines={1} style={styles.autorLivro}>{item.autor}</Text>
    </TouchableOpacity>
  );

  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(buscar.toLowerCase()) ||
      livro.autor.toLowerCase().includes(buscar.toLowerCase())
  );

  const filtrarPorGenero = (generoSelecionado) => {
    if (!generoSelecionado) {
      setLivros(livrosOriginais);
    } else {
      const filtrados = livrosOriginais.filter(livro => livro.genero === generoSelecionado);
      setLivros(filtrados);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.fraseTopo}>
            Um livro por dia, {"\n"}uma nova aventura
          </Text>
          <Image source={require("../../assets/Imagem.png")} style={styles.ilustracao} />
        </View>

        <View style={styles.buscarCadastrar}>
          <View style={styles.buscarContainer}>
            <Ionicons name="search" size={18} color="#600" style={styles.searchIcon} />
            <TextInput
              style={styles.buscarInput}
              placeholder="Buscar..."
              placeholderTextColor="#600"
              value={buscar}
              onChangeText={setBuscar}
            />
          </View>
          {buscar.length > 0 && (
            <TouchableOpacity onPress={() => setBuscar("")}>
              <Ionicons name="close" size={18} color="#600" style={styles.closeIcon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate("Cadastrar livro")}>
            <Text style={styles.textoCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titulo}>Meus Livros</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtroMenuContainer}>
          {filtros.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.filtroPill, filtro === item && styles.filtroPillAtivo]}
              onPress={() => {
                setFiltro(item);
                buscarLivros(item, user);
              }}
            >
              <Text style={[styles.filtroTexto, filtro === item && styles.filtroTextoAtivo]}>
                {item}
              </Text>
              {filtro === item && <View style={styles.underline} />}
            </TouchableOpacity>
          ))}
        </ScrollView>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={livrosFiltrados}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listaContainer}
        />

        <Text style={styles.titulo2}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriasContainer}>
          {generosUnicos.map((genero) => (
            <TouchableOpacity 
              key={genero} 
              style={styles.categoriaPill}
              onPress={() => filtrarPorGenero(genero)}
            >
              <Text style={styles.categoriaTexto}>{genero}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.navegacaoInferior}>
        <TouchableOpacity style={styles.itemNavegacao}>
          <MaterialCommunityIcons name="bookshelf" size={30} color="#600" />
        </TouchableOpacity>
        
        <View style={styles.separador} />

        <TouchableOpacity style={styles.itemNavegacao} onPress={() => navigation.navigate("perfil")}>
          <Ionicons name="person-circle" size={30} color="#600" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
