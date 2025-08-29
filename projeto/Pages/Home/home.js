import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function HomeScreen() {
  const [buscar, setBuscar] = useState("");
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      
      <View style={styles.topo}>
        
        <View style={styles.buscarContainer}>
          <Ionicons name="search" size={18} color="#600" style={{ marginLeft: 6 }} /> 
          
          <TextInput
            style={styles.buscarInput}
            placeholder="Buscar..."
            placeholderTextColor="#600"
            value={buscar}
            onChangeText={setBuscar}
          />
          {buscar.length > 0 && (
            <TouchableOpacity onPress={() => setBuscar("")}>
              <Ionicons name="close" size={18} color="#600" style={{ marginRight: 6 }} /> 
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.botaoCadastrar}>
          <Text style={styles.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Meus Livros</Text>

      <View style={styles.navegacaoInferior}>
        <TouchableOpacity style={styles.itemNavegacao}>
          <MaterialCommunityIcons name="bookshelf" size={30} color="#600" /> 
        </TouchableOpacity>

        <View style={styles.separador} />

        <TouchableOpacity
          style={styles.itemNavegacao}
          onPress={() => navigation.navigate("perfil")} 
        >
          <Ionicons name="person-circle" size={30} color="#600" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
}
