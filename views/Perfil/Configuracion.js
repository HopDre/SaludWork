import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Configuracion = () => {

  const navigation = useNavigation();


  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    const updatedStyles = darkMode ? styles.lightMode : styles.darkMode;
  };
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

      <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.formulario}>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.button}>
      <Icon name={darkMode ? 'moon' : 'sunny'} color="#fff" size={25} />
      <Text style={styles.buttonText}>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</Text>
    </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <View style={styles.button}>
          <Icon name="log-out" size={25} color="white" />
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <View style={styles.eliminar}>
          <Icon name="trash" size={25} color="white" />
            <Text style={styles.buttonText}>Eliminar mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};
export default Configuracion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: "relative",
    backgroundColor: "white",
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
  scrollViewContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "left",
    padding: 15,
    fontSize: 18,
    color: "#4BAADD",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    flexDirection:"row",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginLeft:10,
  },
  alineamiento: {
    flexDirection: "row", // Alinea los elementos en fila
    justifyContent: "space-between", // Espacio uniforme entre los elementos
  },
  formulario:{
    marginTop:10,
  },
  darkMode: {
    backgroundColor: '#2c3e50',
    // Otros estilos oscuros...
  },
  // Estilos para el modo claro
  lightMode: {
    backgroundColor: '#3498db',
    // Otros estilos claros...
  },
  eliminar:{
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    flexDirection:"row",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  }
});