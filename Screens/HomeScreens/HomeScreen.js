import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

import PostsScreens from '../MainScreen/PostsScreens';
import CreatePostsScreen from '../MainScreen/CreatePostsScreen';
import ProfileScreen from '../MainScreen/ProfileScreens';

//icons
import { Feather } from '@expo/vector-icons'; 

const Home = () => {
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
  

export default Home;