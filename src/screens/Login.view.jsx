import React, { useState, useEffect } from "react";
import { useFetch } from "../customsHooks/useFetch.js";
import { jwtDecode } from "jwt-decode";
import {Text, StyleSheet, TouchableWithoutFeedback, View, TextInput, Image, Button} from "react-native";

const Login = ({ navigation }) => {

  //Version de la app
  //const { info } = useFetch("http://192.168.28.40:5000/api/v1/MVC/app/releases")
  //const miVersion = info.data[info.data.length - 1].VERSIONX  
  //console.log(miVersion);
  

  //Variables Usuario contrasena y usuario
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  //Funcion POST login
  const miLogin = async () => {

    try {
      const requestBody = {
        SYS00001: {
          USREMAXX: user,
          USRPASSX: pass,
          ISSOCIAL: "NO"
        }
      };
      const res = await fetch('http://192.168.28.40:5000/api/v1/login', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      if(res.ok){
        const miInfo = await res.json();
        navigation.navigate("Home")

        console.log(miInfo.data.token);
        miToken = miInfo.data.token;
        return miToken
      }
    } catch (error) {
      
    }
    
  }



  return (
    <View style={styles.container}>
      <View style={styles.consteinerLogo}>
        <Image
          source={require("../../img/login_logo.png")}
          style={styles.imgLogo}
        />
      </View>
      <View style={styles.containerTittle}>
        <Text style={styles.tittle}>Ingresa</Text>
      </View>
      <View style={styles.conteinerForm}>

        <TextInput 
          placeholder="Usuario" 
          style={styles.textInput}
          value={user}
          onChangeText={setUser}
        ></TextInput>
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          style={styles.textInput}
          value={pass}
          onChangeText={setPass}
        ></TextInput>

<TouchableWithoutFeedback onPress={miLogin}>
          <Text style={styles.button}>Entrar</Text>
        </TouchableWithoutFeedback>

        <View style={styles.containerText}>
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
              onPress={() => navigation.navigate("Registro")}
            >
              <Text style={styles.textLink}>Registrate</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
        <Text style={styles.text}>
          
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
  containerTittle: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  conteinerForm: {
    height: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 45,
  },
  tittle: {
    fontSize: 30,
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
    marginTop: 15,
    borderColor: "black",
    borderWidth: 2,
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
    marginTop: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  containerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});

export default Login;
