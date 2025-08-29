import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e73c7", 
    padding: 20,
  },
  card: { 
    width: "100%", 
    maxWidth: 420, 
    backgroundColor: "#fff", 
    borderRadius: 20, 
    padding: 20, 
    elevation: 3,
    alignSelf: "center",
    paddingBottom: 30,
  },
  title: { 
    fontSize: 36, 
    fontWeight: "800", 
    textAlign: "center", 
    color: "#1e73c7",
    marginBottom: 5
  },
  titleRow: {
    flexDirection: 'row',       
    alignItems: 'center',       
    justifyContent: 'center',   
    marginBottom: 15, 
  },
  title2: { 
    fontSize: 36,
    fontWeight: "800",
    color: "#1e73c7",                 
    marginLeft: 10
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  subtitle: { 
    fontSize: 18, 
    color: "#555", 
    textAlign: "center", 
    marginBottom: 20
  },
  label: { 
    fontSize: 16, 
    fontWeight: "600", 
    color: "#1e73c7", 
    marginBottom: 5
  },
  input: { 
    height: 48, 
    borderWidth: 1, 
    borderColor: "#1e73c7", 
    borderRadius: 12, 
    paddingHorizontal: 12, 
    backgroundColor: "#fff",
    marginBottom: 15
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
    backgroundColor: "#1e73c7",  
    marginBottom: 10
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "700" 
  },
  registerText: {
    color: "#1e73c7",
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 13,
  },
});

export default styles;
