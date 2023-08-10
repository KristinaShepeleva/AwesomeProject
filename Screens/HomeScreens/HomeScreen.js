import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const MainTab = createBottomTabNavigator();

import PostsScreens from '../MainScreen/PostsScreens';
import CreatePostsScreen from '../MainScreen/CreatePostsScreen';
import ProfileScreen from '../MainScreen/ProfileScreens';

//icons
import { Feather } from '@expo/vector-icons'; 

const Home = ({navigation}) => {
  return (
        <MainTab.Navigator screenOptions={() => ({
            tabBarShowLabel: false, 
            activeTintColor: "#FF6C00",
            inactiveTintColor: '#212121',
      })} >
      <MainTab.Screen options={{
        headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <Feather name="grid" size={size} color={color} />), 
            }} name="Posts" component={PostsScreens} />
      <MainTab.Screen options={{
        title: 'Створити публікацію',
        headerLeft: () => (
          <Feather style={styles.arrowLeft} name="arrow-left" size={24} color="black" onPress={() => navigation.navigate("Posts")} />
        
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.btnCreate}><Feather style={styles.icon} name="plus" size={size} color={color} /></View>)
            }} name="Create" component={CreatePostsScreen} />
      <MainTab.Screen options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <Feather name="user" size={size} color={color} />)
            }} name="Profile" component={ProfileScreen}/>
      </MainTab.Navigator>
    )
};
  

export default Home;


const styles = StyleSheet.create({

  btnLogOut: {
    marginRight: 16,
  },
  icon: {
    color: '#fff',
  },
  btnCreate: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    marginLeft: 16,
  }
})





// (
//         <MainTab.Navigator
//             screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Posts") {
//             iconName =  "grid";
//           } else if (route.name === "Create") {
//             iconName = "plus";
//           } else if (route.name === "Profile") {
//             iconName = "user";
//           }
//           return <Feather name={iconName} size={size} color={color} />;
//           },
//           tabBarShowLabel: false,
//           activeTintColor: "#FF6C00",
//           inactiveTintColor: "#212121",
//       })}>
//             <MainTab.Screen name="Posts" component={PostsScreens} options={{
//           title: "Публікації", headerRight: () => (
//                 <TouchableOpacity style={styles.btnLogOut} activeOpacity={0.8} onPress={() => alert("This is a log-out!")}>
//                 <Feather name="log-out" size={24} color="#212121" />
//                 </TouchableOpacity>
//             ),
//         }}/>
//         <MainTab.Screen style={styles.btnCreate} name="Create" component={CreatePostsScreen} options={{
//           title: "Створити публікацію",
//         }}/>
//         <MainTab.Screen name="Profile" component={ProfileScreen} />
//       </MainTab.Navigator>
//     )