import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Preguntas = () => {
  const initialTexts = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, duis malesuada velit praesent ridiculus ullamcorper quam himenaeos per, fermentum litora porta gravida sapien eleifend montes. Senectus vel sollicitudin viverra malesuada cras semper curabitur accumsan montes potenti elementum",
  ];

  const [visibleTextIndex, setVisibleTextIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleTextIndex(visibleTextIndex === index ? null : index);
  };

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
      <ScrollView style={styles.contenedor}>
        <Text style={styles.titulo}>Preguntas frecuentes</Text>
        {initialTexts.map((text, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => toggleTextVisibility(index)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Pregunta {index + 1}</Text>
            </TouchableOpacity>

            {visibleTextIndex === index && (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  contenedor: {
    flex: 1,
    width: "100%",
  },
  button: {
    backgroundColor: "#0074BD",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
  },
  textContainer: {
    marginTop: 5,
    padding: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  titulo: {
    fontSize: 30,
    color: "#0074BD",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Preguntas;
