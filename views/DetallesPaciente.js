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

const DetallesPaciente = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Menú fijo en la parte inferior con iconos presionables */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Principal")}
        >
          <Icon name="home" size={30} color="#0074BD" />
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
          <Icon name="folder-open" size={30} color="#4BAADD" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.cont}>
          <Image
            style={styles.foto}
            source={require("../assets/foto.jpg")}
          ></Image>
          <View style={styles.datos}>
            <Text style={styles.nombre}>Magdalena Salgado</Text>
            <Text style={styles.sintoma}>
              El día de hoy desperté con un fuerte dolor en la rodilla el cual
              me incapacita para moverme o hacer cualquier actividad física
            </Text>
          </View>
        </View>
        <Image
          style={styles.map}
          source={require("../assets/maps.jpeg")}
        ></Image>
         <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Principal")}
        >
          <Text style={styles.btnText}>Aceptar soliciutd</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DetallesPaciente;

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
    marginRight: 20,
  },
  cont: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  scroll: {
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "#0074BD",
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
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  datos: {
    flex: 1,
  },
  nombre: {
    color: "#0074BD",
    fontWeight: "500",
    marginBottom: 10,
  },
  map:{
    marginVertical:20,
    width:"100%",
    height:500,
  }
});
