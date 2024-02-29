import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Servicio = () => {
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
          <Icon name="person" size={30} color="#4BAADD" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="folder-open" size={30} color="#0074BD" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.titulo}>Historial de pacientes</Text>
        <View style={styles.contenedor}>
          <View style={styles.contenedorDos}>
            <Image
              style={styles.foto}
              source={require("../assets/foto.jpg")}
            ></Image>
            <View style={styles.textos}>
              <Text style={styles.textoCont}>
                Magdalena Salgado
              </Text>
              <Text style={styles.textoCont}>
                30/01/2024
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Datos")}
          >
            <Text style={styles.btnText}>Ver datos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <View style={styles.contenedorDos}>
            <Image
              style={styles.foto}
              source={require("../assets/foto2.jpg")}
            ></Image>
            <View style={styles.textos}>
              <Text style={styles.textoCont}>
                Maria Pérez
              </Text>
              <Text style={styles.textoCont}>
                30/01/2024
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Datos")}
          >
            <Text style={styles.btnText}>Ver Datos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <View style={styles.contenedorDos}>
            <Image
              style={styles.foto}
              source={require("../assets/foto3.jpg")}
            ></Image>
             <View style={styles.textos}>
              <Text style={styles.textoCont}>
                Camila Peña
              </Text>
              <Text style={styles.textoCont}>
                30/01/2024
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Datos")}
          >
            <Text style={styles.btnText}>Ver datos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <View style={styles.contenedorDos}>
            <Image
              style={styles.foto}
              source={require("../assets/foto4.jpg")}
            ></Image>
             <View style={styles.textos}>
              <Text style={styles.textoCont}>
                Juan Gómez
              </Text>
              <Text style={styles.textoCont}>
                30/01/2024
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Datos")}
          >
            <Text style={styles.btnText}>Ver datos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Servicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
  button: {
    backgroundColor: "#4BAADD",
    paddingVertical: 15,
    borderRadius: 40,
    marginBottom: 80,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 18,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#4BAADD",
  },
  cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  scroll: {
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  contenedor: {
    backgroundColor: "#4BAADD",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  contenedorDos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textoCont: {
    flex: 1,
    paddingLeft: 10,
    color: "white",
  },
  btnText: {
    color: "#0074BD",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0074BD",
    marginBottom: 20,
  },
  textos:{
    flex:1,
  }
});
