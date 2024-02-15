import React, {useState, useEffect }from "react";
import axios from "axios";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Login = () => {
  
  const [selected, setSelected] = React.useState("");
  const data = [
    { Key: "1", value: "Carros" },
    { Key: "2", value: "Motos" },
    { Key: "3", value: "Camionetas" },
    { Key: "4", value: "Gatos" },
    { Key: "5", value: "Perros" },
    { Key: "6", value: "Caballos" },
    { Key: "7", value: "Conejos" },
    { Key: "8", value: "Pajaros" },
    { Key: "9", value: "Gatitos" },
    { Key: "10", value: "Perritos" },
  ];
  return (
    <ScrollView style={styles.container}>
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
        <SelectList
          style={styles.select}
          data={data}
          boxStyles={styles.select}
          dropdownStyles={{ borderColor: "#FF5C3D" }}
          setSelected={(val) => setSelected(val)}
          save="value"
          placeholder="Razón Social"
        />
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
