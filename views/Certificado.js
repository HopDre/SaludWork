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
import * as DocumentPicker from "expo-document-picker";

const Certificado = () => {
  const [evaluacion, setEvaluacion] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [intervencion , setIntervencion] = useState("");
  const [indicaciones, setIndicaciones] = useState("");
  const [interconsultas, setInterconsultas] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const navigation = useNavigation();


  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      if (result.type === "success") {
        setSelectedFile(result);
      }
    } catch (err) {
    }
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
          <Icon name="person" size={30} color="#4BAADD"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Servicio")}
        >
          <Icon name="folder-open" size={30} color="#0074BD" />
        </TouchableOpacity>
      </View>


      <View style={styles.formulario}>
        <Text style={styles.titulo}>Asociar certificado</Text>
        <TextInput
          style={styles.input}
          placeholder="Evaluación"
          placeholderTextColor={"grey"}
          value={evaluacion}
          onChangeText={setEvaluacion}
        />
        <TextInput
          style={styles.input}
          placeholder="Diagnóstico"
          placeholderTextColor={"grey"}
          value={diagnostico}
          onChangeText={setDiagnostico}
        />
        <TextInput
          style={styles.input}
          placeholder="Intervención"
          placeholderTextColor={"grey"}
          value={intervencion}
          onChangeText={setIntervencion}
        />
        <TextInput
          style={styles.input}
          placeholder="Indicaciones"
          placeholderTextColor={"grey"}
          value={indicaciones}
          onChangeText={setIndicaciones}
        />
        <TextInput
          style={styles.input}
          placeholder="Interconsultas y/o derivaciones"
          placeholderTextColor={"grey"}
          value={interconsultas}
          onChangeText={setInterconsultas}
        />
         <Text style={styles.certi}>
          Ingrese las recetas correspondientes
        </Text>
        <TouchableOpacity style={styles.archivo} onPress={pickDocument}>
          <Text style={styles.archivoText}>Seleccionar Archivo</Text>
        </TouchableOpacity>
        {selectedFile && (
          <View style={styles.selectedFileContainer}>
            <Text style={styles.selectedFileName}>{selectedFile.name}</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("Datos")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Envíar certificado</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Certificado;

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
  archivo: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#4BAADD",
    padding: 10,
    borderRadius: 20,
  },
  archivoText:{
    color:"white"
  },
  selectedFileContainer: {
    marginTop: 20,
  },
  selectedFileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
