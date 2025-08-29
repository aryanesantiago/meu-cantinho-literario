import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffd6d6",
    justifyContent: "space-between",
  },

  buscarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#600",
    flex: 1,
    marginRight: 10,
  },

  buscarInput: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: "#600",
  },

  botaoCadastrar: {
    backgroundColor: "#600",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  textoCadastrar: {
    color: "#fff",
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#600",
  },

  navegacaoInferior: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#600",
    paddingVertical: 8,
    backgroundColor: "#ffd6d6",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  itemNavegacao: {
    flex: 1,
    alignItems: "center",
  },

  separador: {
    width: 1,
    backgroundColor: "#600",
    height: "100%",
  },
});

export default styles;
=======
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#1e73c7" 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#fff", 
    marginBottom: 10 
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 30
  },
  button: { 
    backgroundColor: "#fff", 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    borderRadius: 10
  },
  buttonText: { 
    color: "#1e73c7", 
    fontWeight: "bold" 
  }
});
>>>>>>> 70df6b2d9be454d071bd8fd5d35f1502cd6872af
