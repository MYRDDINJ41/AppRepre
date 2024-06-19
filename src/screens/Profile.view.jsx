import React ,{useContext} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AuthoContext } from "../context/AuthContext.js";

const Profile = () => {

  const {JWT, data }=  useContext(AuthoContext)

  

  return (


    <View style={styles.container}>
      <View style={styles.consteinerLogo}>
        <Image source={require("../../img/user.png")} style={styles.imgLogo} />
      </View>
      <View style = {styles.containerData}>
        <Text style = {styles.textos}>{data.data.USRNOMXX}</Text>
        <Text style = {styles.textos}>{data.data.USREMAXX}
        </Text>
        <Text style = {styles.textos}>{data.data.CARIDXXX}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  consteinerLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  imgLogo: {
    width: "55%",
    height: "80%",
  },
  containerData:{
    display: "flex",
    paddingTop: 30,
    alignItems: "center",
    height: "60%"
  },
  textos:{
    marginBottom: 10,
    fontSize: 15
  }
});

export default Profile;
