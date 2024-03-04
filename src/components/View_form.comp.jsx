import React, {useState, useEffect }from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox"


const View_form = () => {
  const [isSelect, setIsSelected] = useState(false);
  const [isSelect2, setIsSelected2] = useState(false);
  const [isSelect3, setIsSelected3] = useState(false);
  const [isSelect4, setIsSelected4] = useState(false); 
  const [isSelect5, setIsSelected5] = useState(false);
  const [isSelect6, setIsSelected6] = useState(false);
  const [isSelect7, setIsSelected7] = useState(false);
  const [isSelect8, setIsSelected8] = useState(false);
  const [isSelect9, setIsSelected9] = useState(false);
  const [isSelect10, setIsSelected10] = useState(false);
  const [isSelect11, setIsSelected11] = useState(false);
  // const [isSelect12, setIsSelected12] = useState(false);


  const vista = (
    <View>
      <Text style={styles.titulo}>Inconsistencias Fisicas</Text>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>ACTA DE SANIDAD DEL VEHICULO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect2}
          onValueChange={setIsSelected2}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>DIFERENCIA DE BULTOS</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect3}
          onValueChange={setIsSelected3}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>EMPAQUE O EMBALAJE ABIERTO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect4}
          onValueChange={setIsSelected4}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>EMPAQUE O EMBALEJE DESTRUIDO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect5}
          onValueChange={setIsSelected6}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>HUMEDAD</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect7}
          onValueChange={setIsSelected7}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>OTROS</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect8}
          onValueChange={setIsSelected8}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>PRECINTOS ROTOS</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect9}
          onValueChange={setIsSelected9}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>RECINTADO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect10}
          onValueChange={setIsSelected10}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>
          SELLO NIMF15 DE EMBALAJES DE MADERA
        </Text>
      </View>
      <Text style={styles.titulo}>Inconsistencias Documentales</Text>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect11}
          onValueChange={setIsSelected11}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>CARGA RECIBIDA FUERA DE TERMINOS</Text>
      </View>
    </View>
  );

  return vista;
};



export default View_form;

const styles = ({
    container:{
        paddingHorizontal: 45,
        paddingBottom: 15,
        backgroundColor: "#fff"
    },
    button2:{
        backgroundColor: "#FF5C3D",
        padding: 10,
        width: "100%",
        borderRadius: 50,
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 18,
        flexDirection: 'row',
        paddingHorizontal: '20%'
    },
    textButton2:{
      fontSize: 18,
      textAlign: "center",
      fontWeight: "bold",
      color: "#fff",
      marginRight : 12
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
    containerCheck:{
      marginTop: 23,
      flexDirection: 'row',
      width: '100%',
    },
    checkBox:{
      marginRight: 10,
      borderColor: '#0079C2',
      borderWidth: 2.2,
      borderRadius: 5
    },
    textosCheck:{
      fontSize: 16,
      width: '90%',
    },
    textInput: {
      width: "100%",
      height: 120,
      backgroundColor: "white",
      borderRadius: 15,
      paddingHorizontal: 20,
      marginTop: 15,
      borderColor: "black",
      borderWidth: 2,
    },
})
