import React from "react";
import { Text, View, TextInput,StyleSheet } from "react-native";

const styles=StyleSheet.create({
  textInput:{
    // borderBottomColor:'red'
  }
})


const Login = () => {
  return (
    <View>
      <TextInput placeholder="Enter Name" />
    </View>
  );
};
export default Login;
