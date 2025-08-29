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
