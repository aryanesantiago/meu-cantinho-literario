import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import styles from "./style";

export default function PerfilScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigation.navigate("Meu cantinho literário"))
      .catch((error) => Alert.alert("Erro ao sair", error.message));
  };

  

  return (

     
    <View style={styles.container}>
      <View style={styles.topo}></View>
      <View style={styles.perfilContainer}>
        <Ionicons name="person-circle" size={100} color="#600" />

        <TouchableOpacity style={styles.botaoSair} onPress={handleLogout}>
          <Text style={styles.textoBotaoSair}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navegacaoInferior}>
        <TouchableOpacity
          style={styles.itemNavegacao}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons name="bookshelf" size={30} color="#600" />
        </TouchableOpacity>

        <View style={styles.separador} />

        <TouchableOpacity style={styles.itemNavegacao}>
          <Ionicons name="person-circle" size={30} color="#600" />
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
