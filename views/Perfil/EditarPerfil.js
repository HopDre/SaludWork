import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EditarPerfil = () => {
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

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image
        source={require('../../assets/logo.png')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.headerImage}
      />
          <View style={styles.botones}>
            <TouchableOpacity onPress={() => navigation.navigate("PersonalInfo")}>
              <View style={styles.btnIcon}>
              <Icon name="person-circle" size={40} color="#4BAADD" width={40} />
                <Text style={styles.buttonText}>Información personal</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MovilInfo")}>
              <View style={styles.btnIcon}>
              <Icon name="car" size={35} color="#4BAADD" width={40} />
                <Text style={styles.buttonText}>Información medio de transporte</Text>
              </View>
            </TouchableOpacity>
          </View>
        {/* Otro contenido del contenedor principal */}
      </ScrollView>
    </View>
  );
};
export default EditarPerfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: "relative",
    backgroundColor:"#4BAADD",
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
    flex:1,
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:150,
  },
  buttonText: {
    textAlign: "left",
    padding: 15,
    fontSize: 18,
    color: "#4BAADD",
    fontWeight: "500",
  },
  btnIcon:{
    width: "100%",
    backgroundColor: "white",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:10,
    borderRadius:40,
    marginBottom:20,
  },
  botones: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop:40,
  },
  headerImage:{
    width:100,
    height:200,
    objectFit:"cover",
  }
});
