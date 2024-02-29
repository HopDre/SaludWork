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

const Terminos = () => {
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
        <Text style={styles.titulo}>Términos y Condiciones del Servicio</Text>
        <Text>
          Bienvenido a nuestro servicio. Al acceder y utilizar nuestros
          servicios, usted acepta cumplir y estar sujeto a los siguientes
          términos y condiciones.{"\n"}
          {"\n"}Lea detenidamente antes de continuar.
        </Text>
        <Text style={styles.bold}>Uso Aceptable:</Text>
        <Text>
          Usted acepta utilizar nuestros servicios únicamente con fines legales
          y éticos. No está permitido realizar actividades que puedan dañar,
          deshabilitar o sobrecargar nuestros sistemas.
        </Text>
        <Text style={styles.bold}>Cuentas de Usuario:</Text>
        <Text>
          Es responsable de mantener la confidencialidad de su información de
          cuenta. Cualquier actividad realizada a través de su cuenta es su
          responsabilidad.
        </Text>
        <Text style={styles.bold}>Contenido del Usuario:</Text>
        <Text>
          Al enviar contenido a nuestro servicio, otorga una licencia no
          exclusiva para su uso. No se permite contenido que sea difamatorio,
          obsceno o que viole derechos de terceros.
        </Text>
        <Text style={styles.bold}>Privacidad:</Text>
        <Text>
          Su privacidad es importante para nosotros. Consulte nuestra Política
          de Privacidad para obtener detalles sobre la recopilación y el uso de
          datos.
        </Text>
        <Text style={styles.bold}>Modificaciones:</Text>
        <Text>
          Nos reservamos el derecho de modificar o suspender nuestros servicios
          en cualquier momento sin previo aviso. Los cambios en los términos y
          condiciones entrarán en vigencia al ser publicados en nuestro sitio
          web.
        </Text>
        <Text style={styles.bold}>Limitación de Responsabilidad:</Text>
        <Text>
          No nos hacemos responsables de pérdidas o daños directos, indirectos,
          incidentales o consecuentes derivados del uso de nuestros servicios.
        </Text>
        <Text style={styles.bold}>Ley Aplicable:</Text>
        <Text>
          Estos términos y condiciones se rigen por las leyes del país de
          registro de la empresa. Al utilizar nuestros servicios, usted acepta
          cumplir estos términos y condiciones. Si no está de acuerdo con alguno
          de estos términos, por favor, absténgase de utilizar nuestros
          servicios.
        </Text>
        <Text>Gracias por confiar en nosotros.</Text>
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
    marginBottom:70,
  },
  bold:{
    fontWeight:"800",
    color: "#0074BD",
  },
  titulo: {
    fontSize: 18,
    color: "#0074BD",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
});

export default Terminos;
