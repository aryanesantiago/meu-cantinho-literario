import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#ffd6d6",
    borderRadius: 15,
    padding: 30,
    marginTop: -25,
  },

  container: {
  paddingHorizontal: 20,
  paddingTop: 40, 
  paddingBottom: 40, 
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

  imageButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 12,
  paddingHorizontal: 20,
  backgroundColor: "#ffffffff",
  borderRadius: 8,
  marginBottom: 15,
  marginTop: 15,
},

imageButtonIcon: {
  marginRight: 10,
},

imageButtonText: {
  color: "#661414",
  fontSize: 16,
  fontWeight: "bold",
},

imagePreview: {
  width: "100%",
  height: 200,
  borderRadius: 10,
  marginBottom: 15,
},

removeImageButton: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 15,
},

removeImageText: {
  color: "#661414",
  fontWeight: "bold",
  marginLeft: 5,
}



});
