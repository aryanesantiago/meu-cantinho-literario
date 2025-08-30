import { StyleSheet } from "react-native";

export default StyleSheet.create({
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

  perfilContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  nome: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#333",
  },

  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },

  botaoLogout: {
  position: "absolute",
  bottom: 70,   
  right: 20,
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
