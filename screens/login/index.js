import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Login from "./login";
import Forgot from "./forgot";


const LoginView = ({navigation}) => (
    <Login banner="Login" navigation={navigation} />
  );

  const ForgotView = ({navigation}) => (
    <Login banner="Forgot" navigation={navigation} />
  );


  const LoginScreen =createStackNavigator(
      {
          Login:{
              screen:LoginView
          },
          Forgot:{
            screen:ForgotView
        }

      }
  )

  export default LoginScreen;