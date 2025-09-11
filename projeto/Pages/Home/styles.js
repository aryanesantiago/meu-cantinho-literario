import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFEF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fraseTopo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#600",
    flex: 1,
    marginBottom: 45,
  },
  ilustracao: {
    width: 190,
    height: 180, },

  buscarCadastrar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: -17,
  },
  buscarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 6,
  },
  closeIcon: {
    marginRight: 6,
  },
  buscarInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    color: "#600",
  },
  botaoCadastrar: {
    backgroundColor: "#600",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  textoCadastrar: {
    color: "#fff",
    fontWeight: "bold",
  },

  filtroMenuContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 3
  },
  filtroPill: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: "#ffd6d6",
  },
  filtroPillAtivo: {
    backgroundColor: "#600",
  },
  filtroTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#600",
  },
  filtroTextoAtivo: {
    color: "#fff",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 25,
    color: "#600",
    padding: 7,
    textAlign: "center",
  },
  titulo2: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 25,
    color: "#600",
    textAlign: "center",
  },

  card: {
    width: 120,
    marginRight: 15,
  },
  capa: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 5,
  },
  placeholder: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  tituloLivro: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  autorLivro: {
    fontSize: 12,
    color: "#444",
  },
  listaContainer: {
    paddingLeft: 20,
    paddingVertical: 10,
  },

  categoriasContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoriaPill: {
    backgroundColor: "#ffd6d6",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
  },
  categoriaTexto: {
    color: "#600",
    fontWeight: "bold",
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
    height: 30,
    backgroundColor: "#ccc",
  },
});
