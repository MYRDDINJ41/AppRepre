import React, {useState, useEffect }from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox"


const View_form = () => {
  const [isSelect, setIsSelected] = useState(false);
  const [isSelect2, setIsSelected2] = useState(false);

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
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>DIFERENCIA DE BULTOS</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>EMPAQUE O EMBALAJE ABIERTO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>EMPAQUE O EMBALEJE DESTRUIDO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>HUMEDAD</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>OTROS</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>PRECINTOS ROTOS</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
          color={"#0079C2"}
        />
        <Text style={styles.textosCheck}>RECINTADO</Text>
      </View>
      <View style={styles.containerCheck}>
        <CheckBox
          style={styles.checkBox}
          value={isSelect}
          onValueChange={setIsSelected}
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
          value={isSelect}
          onValueChange={setIsSelected}
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
