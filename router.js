import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import Registr from './Screens/AuthScreens/RegistrationScreen';
import Login from './Screens/AuthScreens/LoginScreen';
import Home from './Screens/HomeScreens/HomeScreen';
import PostsScreens from './Screens/MainScreen/PostsScreens';
import CreatePostsScreen from './Screens/MainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/MainScreen/ProfileScreens';

//icons
import { Feather } from '@expo/vector-icons'; 
//import { Feather } from '@expo/vector-icons';

export const useRoute = (isAuth) => {
    if (!isAuth) {
      return (
        <AuthStack.Navigator>
          <AuthStack.Screen options={{
            headerShown: false
          }} name="Registration" component={Registr} />
          <AuthStack.Screen options={{
            headerShown: false
          }} name="Login" component={Login} />
        </AuthStack.Navigator>
      );
    }
    return (
        <MainTab.Navigator
            screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName =  "grid";
          } else if (route.name === "Create") {
            iconName = "plus";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          activeTintColor: "#FF6C00",
          inactiveTintColor: "#212121",
      })}>
            <MainTab.Screen name="Posts" component={PostsScreens} />
        <MainTab.Screen name="Create" component={CreatePostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen}/>
      </MainTab.Navigator>
    )
};
  




    //   tabBarStyle: {
    //       height: 64,
    //       paddingTop: 10,
    //       paddingBottom: 20,

    //       alignItems: 'center',
    //       alignContent: 'center',
    //       justifyContent: 'center',
    //     } 

    
    
    // (
    //     <MainTab.Navigator screenOptions={() => ({
    //         tabBarShowLabel: false, 
    //         activeTintColor: '#FF6C00',
    //         inactiveTintColor: '#212121',
    //   })} >
    //         <MainTab.Screen options={{
    //             tabBarIcon: ({ focused, size, color }) => (
    //                 <Feather name="grid" size={size} color={color} />)
    //         }} name="Posts" component={PostsScreens} />
    //     <MainTab.Screen options={{
    //             tabBarIcon: ({ focused, size, color }) => (
    //                 <Feather name="plus" size={size} color={color} />)
    //         }} name="Create" component={CreatePostsScreen} />
    //     <MainTab.Screen options={{
    //             tabBarIcon: ({ focused, size, color }) => (
    //                 <Feather name="user" size={size} color={color} />)
    //         }} name="Profile" component={ProfileScreen}/>
    //   </MainTab.Navigator>
    // )