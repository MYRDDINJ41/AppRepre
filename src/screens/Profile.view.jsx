import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.consteinerLogo}>
        <Image source={require("../../img/user.png")} style={styles.imgLogo} />
      </View>
      <View style = {styles.containerData}>
        <Text style = {styles.textos}>Andres Jaimes</Text>
        <Text style = {styles.textos}>ANDRES.JAIMES@REPREMUNDO.COM</Text>
        <Text style = {styles.textos}>Analista Help Desk</Text>
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
