
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
const AuthStack = createStackNavigator();

import { useSelector, useDispatch } from 'react-redux';
import { authStateChangeUser } from '../../redux/auth/authOperations';
import { selectStateChange } from '../../redux/auth/authSelections';

import Registr from '../AuthScreens/RegistrationScreen';
import Login from '../AuthScreens/LoginScreen';
import Home from './HomeScreen';

export default function Main() {
     const dispatch = useDispatch();
  const stateChange = useSelector(selectStateChange);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  console.log("stateChange", stateChange);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {!stateChange ? (
          <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Registration" component={Registr} />
            <AuthStack.Screen name="Login" component={Login} />
            </AuthStack.Navigator>
        ) : (
            <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Home" component={Home} />
          </AuthStack.Navigator>)
}
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