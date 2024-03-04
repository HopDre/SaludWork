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
    "¿Cómo puedo registrarme como profesional de la salud en la aplicación?\n\nPara registrarte como profesional de la salud en nuestra aplicación, simplemente sigue los pasos de registro en la sección designada para proveedores. Deberás proporcionar información sobre tu licencia médica y otros detalles relevantes para verificar tu identidad y credenciales.",
    "¿Qué tipo de servicios médicos puedo ofrecer a través de la aplicación?\n\nNuestra aplicación permite a los profesionales de la salud ofrecer una variedad de servicios, que van desde consultas generales hasta servicios especializados según tu área de expertise. Puedes especificar los servicios que ofreces durante el proceso de registro.",
    "¿Cómo funciona el proceso de programación de citas desde mi perspectiva como proveedor de salud?\n\nUna vez que estés registrado como proveedor en la aplicación, recibirás notificaciones sobre las solicitudes de citas de los usuarios. Puedes revisar estas solicitudes y confirmar las citas según tu disponibilidad.",
    "¿Cómo garantiza la aplicación la privacidad y seguridad de la información médica que comparto?\n\nLa aplicación utiliza medidas de seguridad avanzadas para proteger la información médica compartida entre los usuarios y los proveedores de salud. Además, cumplimos con las regulaciones de privacidad de datos para garantizar la confidencialidad de la información médica.",
    "¿Cuál es el proceso de pago por los servicios médicos prestados a través de la aplicación?\n\nLos pagos por los servicios médicos se gestionan de manera segura a través de la aplicación. Una vez que completes una consulta o servicio, recibirás el pago según los términos y condiciones acordados previamente.",
    "¿Qué debo hacer en caso de emergencia médica durante una consulta a través de la aplicación?\n\nSi un usuario experimenta una emergencia médica durante una consulta, asegúrate de proporcionar orientación inicial y, si es necesario, recomienda buscar atención médica presencial de inmediato. La aplicación también proporciona recursos de emergencia para ayudar a los usuarios en situaciones críticas.",
    "¿Puedo acceder a la información médica de mis pacientes a través de la aplicación?\n\nSí, como proveedor de salud, tendrás acceso a la información médica relevante de tus pacientes a través de la aplicación. Esto te permite proporcionar un mejor cuidado al tener un historial médico completo disponible durante las consultas.",
    "¿Qué debo hacer si tengo problemas técnicos durante una consulta a través de la aplicación?\n\nSi experimentas problemas técnicos durante una consulta, comunícate con nuestro equipo de soporte técnico para obtener asistencia inmediata. También puedes ofrecer a los usuarios la opción de reprogramar la consulta si es necesario resolver el problema técnico.",
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
              <Text style={styles.buttonText}>{index + 1}</Text>
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
    marginBottom:45,
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
