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

const Recuperacion = () => {
  const [text, setText] = useState("");

  const handleInputChange = (inputText) => {
    setText(inputText);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Recuperación de contraseña</Text>
      
      <TextInput
        style={styles.inputs}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Ingrese su correo"
        placeholderTextColor={"#9EA3A7"}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Recuperar contraseña</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Recuperacion;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width,
    height,
    backgroundColor:"#4BAADD",
    padding:5,
    justifyContent:"center"
  },
  titulo: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
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
});
