import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import "dayjs/locale/es";
import * as DocumentPicker from "expo-document-picker";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDos, setPasswordDos] = useState("");
  const [profesion, setProfesion] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [value, setValue] = useState(dayjs());
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
    <ScrollView style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Crear una cuenta</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor={"grey"}
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor={"grey"}
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="RUT"
          placeholderTextColor={"grey"}
          value={rut}
          onChangeText={setRut}
        />
        <Text style={styles.textoFecha}>Fecha de nacimiento</Text>
        <View style={styles.calendar}>
        <View style={styles.calendar}>
          <DateTimePicker
            value={value}
            onValueChange={(date) => setValue(date)}
            mode={"date"}
            locale={"ES"}
            firstDayOfWeek={1}
            selectedItemColor={"#0074BD"}
            calendarTextStyle={styles.textCal}
            selectedTextStyle={styles.textSelecCal}
            headerTextStyle={styles.headerTextCalendar}
            weekDaysTextStyle={styles.weekTextCalendar}
          />
        </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Direccion"
          placeholderTextColor={"grey"}
          value={direccion}
          onChangeText={setDireccion}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor={"grey"}
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"grey"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor={"grey"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          placeholderTextColor={"grey"}
          value={passwordDos}
          onChangeText={setPasswordDos}
          secureTextEntry
        />
         <TextInput
          style={styles.input}
          placeholder="Profesión"
          placeholderTextColor={"grey"}
          value={profesion}
          onChangeText={setProfesion}
        />
        <TextInput
          style={styles.input}
          placeholder="Especialidad"
          placeholderTextColor={"grey"}
          value={especialidad}
          onChangeText={setEspecialidad}
        />
          <Text style={styles.certi}>
          Ingresa tus certificados y/o capacitaciones
        </Text>
        <TouchableOpacity style={styles.archivo} onPress={pickDocument}>
          <Text style={styles.archivoText}>Seleccionar Archivo</Text>
        </TouchableOpacity>
        {selectedFile && (
          <View style={styles.selectedFileContainer}>
            <Text style={styles.selectedFileName}>{selectedFile.name}</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("RegistAuto")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BAADD",
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
  placeholderStyle: {
    fontSize: 14,
    color: "grey",
  },
  input: {
    backgroundColor: "white",
    marginTop: 10,
    height: 50,
    fontSize: 14,
    paddingHorizontal: 8,
    borderWidth:1,
    borderRadius:15,
  },
  placeholder: {
    color: "black",
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
    fontSize: 20,
  },
  textCal: {
    color: "#4BAADD",
  },
  textSelecCal: {
    color: "white",
  },
  calendar: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderWidth:1,
    borderRadius:15,
  },
  headerTextCalendar: {
    color: "#4BAADD",
  },
  weekTextCalendar: {
    color: "#0074BD",
  },
  textoFecha: {
    marginTop: 10,
    marginBottom: 5,
    color: "#4BAADD",
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
  certi:{
    color:"#4BAADD",
    marginTop:20,
    marginLeft:5,
  }
});
