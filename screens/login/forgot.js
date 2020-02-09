import React from "react";
import { Text, View, TextInput,StyleSheet } from "react-native";

const styles=StyleSheet.create({
  textInput:{
    // borderBottomColor:'red'
  }
})


const Forgot = () => {
  return (
    <View>
        <Text>Hello Forgot</Text>
      <TextInput placeholder="Enter Name" />
    </View>
  );
};
export default Forgot;
