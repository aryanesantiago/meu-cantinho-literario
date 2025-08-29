import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black', 
    fontWeight: 'bold',
    marginBottom: 430,
    textAlign: 'center',
},
  button: {
   width: 140,
    height: 50,
    backgroundColor: '#661414', 
    borderRadius: 40,
    borderWidth: 2,  
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 18,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  cadastrar:{
    color: '#661414',
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'underline'
  },
});

export default styles;