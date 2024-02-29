import {
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    FlatList
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import React from "react";
  
  const { width, height } = Dimensions.get("window");
  
  const items = [
    {
      id: 1,
      image: require("../assets/slider/slider1.png"),
      title: "Optimiza tu tiempo, mejora la atención",
      description: "Simplificamos tu gestión de pacientes para que puedas centrarte en lo que más importa: su cuidado y bienestar.",
    },
    {
      id: 2,
      image: require("../assets/slider/slider2.png"),
      title: "Conéctate con tus pacientes de manera eficiente y segura",
      description: "Fácil comunicación, seguimiento y atención personalizada.",
    },
    {
      id: 3,
      image: require("../assets/slider/slider3.png"),
      title: "Innovación en salud a tu alcance",
      description:
        "integramos tecnología para agilizar tu trabajo, facilitar el acceso a información relevante y ofrecer una experiencia más cómoda.",
    },
  ];
  
  const Inicio = () => {
      const navigation = useNavigation();  
      return (
        <View style={styles.contenedor}>
          <StatusBar hidden></StatusBar>
          <FlatList
            data={items}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Animated.Image
                  source={item.image}
                  style={styles.image}
                ></Animated.Image>
                <Animated.View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </Animated.View>
              </View>
            )}
          />  
          {/* Botón de inicio de sesión */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  };
  
  export default Inicio;

  const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      backgroundColor: "white",
    },
    item: {
      width,
      height,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: "contain",
      marginBottom: 50,
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      padding: 20,
      textAlign: "center",
    },
    description: {
      fontSize: 15,
      padding: 20,
      textAlign: "center",
    },
    buttonContainer: {
      backgroundColor: "#4BAADD",
      padding: 10,
      borderRadius: 20,
      marginTop: 20,
      marginBottom: 20,
      alignItems: "center",
      width: "80%",
      alignSelf: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });
  