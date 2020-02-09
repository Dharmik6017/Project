import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login/login";

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

const App = () => {
  return (
    <View style={styles.container}> 
      <Text>Hello</Text>
      <Login />
    </View>
  );
};
export default App;
