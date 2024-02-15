import React from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Image,
} from "react-native";

const Login = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.consteinerLogo}>
        <Image
          source={require("../../img/login_logo.png")}
          style={styles.imgLogo}
        />
      </View>
      <View style={styles.conteinerForm}>
        <Text style={styles.tittle}>Ingresa</Text>
        <TextInput placeholder="Usuario" style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.textInput}
        ></TextInput>
        <TouchableWithoutFeedback>
          <Text style={styles.button}>Entrar</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>
          ¿Olvidaste tu contraseña?<Text> </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Recover")}
          >
            <Text style={styles.textLink}>Recuperar</Text>
          </TouchableWithoutFeedback>
        </Text>
        <Text style={styles.text}>
          ¿No tienes cuenta?<Text> </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.textLink}>Registrate</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#0079C2",
  },
  consteinerLogo: {
    height: "50%",
  },
  imgLogo: {
    width: "100%",
    height: "100%",
  },
  conteinerForm: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  tittle: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 20,
    margin: 15,
    borderColor: "black",
    borderWidth: 1.2,
  },
  text: {
    color: "white",
  },
  textLink: {
    color: "white",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#FF5C3D",
    padding: 10,
    width: "100%", 
    textAlign: "center",
    borderRadius: 50,
    margin: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Login;
