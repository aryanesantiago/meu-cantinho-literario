import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

   background: {
    flex: 1,
  },
 
   content: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",     
    padding: 24,
  },

  subtitle: { 
    fontSize: 18, 
    color: "#555", 
    textAlign: "center", 
    marginBottom: 30,
    marginTop: 85
  },

 label: { 
    fontSize: 17, 
    fontWeight: "600", 
    color: "#661414", 
    marginBottom: 5,
    alignSelf: "flex-start", 
  },

  input: { 
    width: "360",
    height: 48, 
    borderWidth: 1, 
    borderColor: "#661414", 
    borderRadius: 12, 
    paddingHorizontal: 12, 
    backgroundColor: "#fff",
    marginBottom: 15, 
  },

  passwordRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20
  },
  button: { 
    height: 50, 
    borderRadius: 14, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#661414",  
    marginBottom: 10
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "700" 
  },
  registerText: {
    color: "#661414",
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 13,
  },
});

export default styles;
