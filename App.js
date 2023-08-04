import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';

import { useRoute } from './router';

export default function App() {
  const routing = useRoute(true);

 const [fontsLoaded] = useFonts({
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>  
  );
};


   {/* <AuthStack.Navigator>
        <AuthStack.Screen options={{
          headerShown: false
        }} name="Registration" component={Registr} />
        <AuthStack.Screen options={{
          headerShown: false
        }} name="Login" component={Login} />
      </AuthStack.Navigator> */}

      {/* <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreens} />
        <MainTab.Screen name="Create" component={CreatePostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen}/>
      </MainTab.Navigator> */}