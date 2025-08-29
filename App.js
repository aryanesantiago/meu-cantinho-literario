import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './projeto/Pages/Landing/landing'; 
import CadastroScreen from './projeto/Pages/Cadastro/cadastro'; 
import LoginScreen from './projeto/Pages/Login/login'; 
import HomeScreen from './projeto/Pages/Home/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Meu cantinho literário">
        <Stack.Screen name="Meu cantinho literário" component={Landing} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component= {HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
