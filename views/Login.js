import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Login = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef(null);
  const handleInputChange = (inputText) => {
    setText(inputText);
  };
  const handlePasswordChange = (inputText) => {
    setPassword(inputText);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Ingreso de usuario</Text>
      
      <TextInput
        style={styles.inputs}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Ingrese su correo"
        placeholderTextColor={"#9EA3A7"}
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordInputRef.current.focus();
        }}
      />
      <TextInput
        ref={passwordInputRef}
        style={styles.inputs}
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
        placeholder="Ingrese su contraseña"
        placeholderTextColor={"#9EA3A7"}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Recuperacion")}>
        <Text style={styles.forget}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <View style={styles.containerDos}>
      <Text style={styles.crear}>
        ¿No tienes una cuenta? 
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Regist')}>
        <View style={styles.linkContainer}>
          <Text style={styles.crearLink}> Regístrate</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width,
    height,
    backgroundColor:"#4BAADD",
    padding:5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginTop: 40,
    marginLeft: 20,
  },
  inputs: {
    height: 40,
    fontSize: 18,
    borderColor: "gray",
    borderWidth: .5,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 8,
    backgroundColor:"white",
    borderRadius:10,
    shadowOpacity: .5,
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 20, // changed to a greater value
    zIndex: 99, // added zIndex
  },
  button: {
    marginTop:80,
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 18,
    marginBottom: 20,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    shadowOpacity: .5,
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 20,
    zIndex: 99,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  forget: {
    textAlign: "center",
    marginTop: 80,
    color: "white",
    fontWeight: "400",
    fontSize:16,
  },
  containerDos: {
    marginTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crear: {
    fontSize: 16,
    color:"#0074BD",
  },
  crearLink: {
    color: '#4BAADD',
    fontSize: 16,
    fontWeight: "500",
    color:"white",
  },
});
