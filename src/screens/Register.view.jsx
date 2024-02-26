import React, {useState, useEffect }from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  fetch
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Login = () => {

  let [isLoading , setLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
    .then(res => res.json())
    .then((result) => {
      setLoading(false);
      setLoading(result);
    },
    (error) => {
      setLoading(false);
      setError(error);
    })
  }, [])
  
  const getContent = () => {
    if(isLoading) {
      console.log("Cargando")
    }
    if(error){
      return console.error(error)
    }
    return console.log(response);
  }

  return (
    <ScrollView style={styles.container}>
      {getContent}
      <View style={styles.container}>
        <Text style={styles.tittle}>Registrate</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Primer Nombre"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Segundo Nombre"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Primer Apellido"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Segundo Apellido"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Numero de Celular"
        ></TextInput>
        <TextInput style={styles.textInput} placeholder="E-mail"></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Numero de documento"
        ></TextInput>
        <TextInput style={styles.textInput} placeholder="Cargo"></TextInput>
        
        <TouchableWithoutFeedback>
          <Text style={styles.button}>Registrarse</Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    widthe: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  tittle: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 15,
    borderColor: "#0079C2",
    borderWidth: 1.2,
  },
  select: {
    marginTop: 15,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 20,
    borderColor: "#0079C2",
    borderWidth: 1.2,
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
});

export default Login;
