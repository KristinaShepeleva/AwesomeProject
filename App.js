import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
const AuthStack = createStackNavigator();

//import { StatusBar } from 'expo-status-bar';


import { useFonts } from 'expo-font';

import Registr from './Screens/AuthScreens/RegistrationScreen';
import Login from './Screens/AuthScreens/LoginScreen';
import Home from './Screens/HomeScreens/HomeScreen';

export default function App() {
  //const routing = useRoute(true);

 const [fontsLoaded] = useFonts({
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="Registration" component={Registr} />
          <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Home" component={Home}/>
        </AuthStack.Navigator>
      </NavigationContainer>  
      </View>
  );
};


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});