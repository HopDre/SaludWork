import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "./views/Splash";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Regist from "./views/Regist";
import RegistAuto from "./views/RegistAuto";
import Principal from "./views/Principal";
import DetallesPaciente from "./views/DetallesPaciente";
import Perfil from "./views/Perfil";
import EditarPerfil from "./views/Perfil/EditarPerfil";
import PersonalInfo from "./views/Perfil/PersonalInfo";
import MovilInfo from "./views/Perfil/MovilInfo";
import Configuracion from "./views/Perfil/Configuracion";
import Preguntas from "./views/Perfil/Preguntas";
import Terminos from "./views/Perfil/Terminos";
import Contacto from "./views/Perfil/Contacto";
import Servicio from "./views/Servicio";
import Datos from "./views/Datos";
import Certificado from "./views/Certificado";

const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Regist" component={Regist} />
        <Stack.Screen name="RegistAuto" component={RegistAuto} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="DetallesPaciente" component={DetallesPaciente} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="MovilInfo" component={MovilInfo} />
        <Stack.Screen name="Configuracion" component={Configuracion} />
        <Stack.Screen name="Preguntas" component={Preguntas} />
        <Stack.Screen name="Terminos" component={Terminos} />
        <Stack.Screen name="Contacto" component={Contacto} />
        <Stack.Screen name="Servicio" component={Servicio} />
        <Stack.Screen name="Datos" component={Datos} />
        <Stack.Screen name="Certificado" component={Certificado} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
