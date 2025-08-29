
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import styles from '../Cadastro/styles'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; 

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function isValidEmail(v) {
    return /\S+@\S+\.\S+/.test(v);
  }

  async function handleCadastro() {
    if (!nome) {
      Alert.alert("Nome obrigatório");
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert("E-mail inválido");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Senha curta", "Sua senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);


      console.log("Usuário criado:", userCredential.user);

      Alert.alert("Cadastro realizado!", "Você já pode fazer login.");
      navigation.replace("Login");

    } catch (error) {
      console.log("Erro Firebase:", error); 

      let mensagem = "";
      switch(error.code){
        case "auth/email-already-in-use":
          mensagem = "Este e-mail já está em uso.";
          break;
        case "auth/invalid-email":
          mensagem = "E-mail inválido.";
          break;
        case "auth/weak-password":
          mensagem = "Senha muito fraca. Use ao menos 6 caracteres.";
          break;
        default:
          mensagem = "Falha no cadastro. Tente novamente.";
      }
      Alert.alert("Erro no cadastro", mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (

    <ImageBackground
      source={require("../../assets/fundo2.png")} 
      style={styles.background}
      resizeMode="cover" 
    >

    
    <KeyboardAvoidingView
      style={styles.content}  
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        
        <Text style={styles.subtitle}>Cadastre-se</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          value={sobrenome}
          onChangeText={setSobrenome}
          placeholder="Digite seu sobrenome"
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="••••••••"
          />
        </View>

        <TouchableOpacity
          onPress={handleCadastro}
          style={[styles.button, loading && { opacity: 0.7 }]}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? "Cadastrando..." : "Cadastrar"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={styles.registerText}>
            Já tem uma conta? Faça login
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
    </ImageBackground>
=======
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.card}>
          <Text style={styles.title}>INOVE</Text>
          <View style={styles.titleRow}>
            <Image source={require("../../assets/box.png")} style={styles.image} />
            <Text style={styles.title2}>TRACK</Text>
          </View>
          <Text style={styles.subtitle}>Cadastro</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="••••••••"
            />
          </View>

          <TouchableOpacity
            onPress={handleCadastro}
            style={[styles.button, loading && { opacity: 0.7 }]}
            disabled={loading}
          >
            <Text style={styles.buttonText}>{loading ? "Cadastrando..." : "Cadastrar"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ marginTop: 15 }}
          >
            <Text style={styles.registerText}>
              Já tem uma conta? Faça login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}
