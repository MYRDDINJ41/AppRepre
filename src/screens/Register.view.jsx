import React, {useState, useEffect }from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Login = () => {

  const [selected, setSelected] = useState('');
  
  const data = [
    {key:'1', value:'Opcion 1'},
    {key:'2', value:'Opcion 2'},
    {key:'3', value:'Opcion 3'},
    {key:'4', value:'Opcion 4'},
    {key:'5', value:'Opcion 5'}
  ]

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
          boxStyles = {styles.select}
          data = {data}
          setSelected={setSelected}
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
