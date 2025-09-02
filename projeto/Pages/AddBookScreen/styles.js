import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#ffd6d6",
    borderRadius: 15,
    padding: 30,
    margin: 20,
    marginTop: -145,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150,
  },

  background: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#661414",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#661414",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 5, 
    fontSize: 16,
    backgroundColor: "#fafafa",
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10, 
  },

  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#661414",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
