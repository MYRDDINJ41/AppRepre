import React, {useState, useEffect }from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet, CheckBox } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Form = () => {

  const [selected, setSelected] = useState('');
  const [isSelect, setIsSelected] = useState(false);
  
  const data = [
    {key:'1', value:'Tipo'},
    {key:'2', value:'Salida'},
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <Text
            style={styles.button}>
            Agregar Imagenes
          </Text>
        </TouchableWithoutFeedback>
        <Text style ={styles.titulo}>Tipo de registro</Text>
        <Text style ={styles.textos}>Acta de sanidad del vehiculo</Text>
        <Text style ={styles.titulo}>Deposito</Text>
        <Text style ={styles.textos}>Centro de distribución 2</Text>
        <SelectList
          boxStyles = {styles.select}
          data = {data}
          setSelected={setSelected}
        />
        <Text style ={styles.titulo}>Inconsistencias Fisicas</Text>
        <CheckBox
          value={isSelect}
          onValueChange = {setIsSelected}
          
        />
        <Text style ={styles.titulo}>Inconsistencias Documentales</Text>
        <Text style ={styles.titulo}>Observaciones</Text>
        <Text style ={styles.titulo}>Identificador de camión</Text>
      </View>
    </ScrollView>
  );
};

const styles = ({
    container:{
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    button:{
        backgroundColor: "#FF5C3D",
        padding: 10,
        width: "100%",
        textAlign: "center",
        borderRadius: 50,
        marginTop: 20,
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    titulo:{
        fontSize: 18,
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold",
    },
    textos:{
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15
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
})

export default Form;
