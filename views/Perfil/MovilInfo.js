import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const MovilInfo = () => {
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [color, setColor] = useState("");
  const [patente, setPatente] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
 {/* Menú fijo en la parte inferior con iconos presionables */}
 <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="home" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Icon name="person" size={30} color="#0074BD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="folder-open" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>


      <View style={styles.formulario}>
        <Text style={styles.titulo}>Modificación de transporte</Text>
        <TextInput
          style={styles.input}
          placeholder="Tipo de transporte (automóvil, camioneta,etc.)"
          placeholderTextColor={"grey"}
          value={tipo}
          onChangeText={setTipo}
        />
        <TextInput
          style={styles.input}
          placeholder="Marca"
          placeholderTextColor={"grey"}
          value={marca}
          onChangeText={setMarca}
        />
        <TextInput
          style={styles.input}
          placeholder="Color"
          placeholderTextColor={"grey"}
          value={color}
          onChangeText={setColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Patente"
          placeholderTextColor={"grey"}
          value={patente}
          onChangeText={setPatente}
        />
         <Text style={styles.certi}>
          Estos datos se mostrarán únicamente al aceptar la visita a algún paciente
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("EditarPerfil")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Actualizar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovilInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BAADD",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDDCDC",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  menuItem: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    color: "#4BAADD",
    marginBottom: 10,
    fontWeight: "600",
  },
  formulario: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  input: {
    backgroundColor: "white",
    marginTop: 10,
    height: 50,
    fontSize: 14,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  certi: {
    color: "#4BAADD",
    marginTop: 20,
    marginLeft: 5,
    fontSize:12
  },
});
