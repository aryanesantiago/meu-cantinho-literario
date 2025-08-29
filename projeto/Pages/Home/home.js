// app/home.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from './styles'; 

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vinda ao App!</Text>
      <Text style={styles.subtitle}>Você está logada!</Text>
    </View>
  );
}


