import React from "react";
import { useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../nestedScreens/DefaultPostsScreen';
import CommentScreen from '../nestedScreens/CommentsScreen';
import MapScreen from '../nestedScreens/MapScreen';


import { authSignOutUser } from '../../redux/auth/authOperations';
//icons
import { Feather } from '@expo/vector-icons';

const NestedScreen = createStackNavigator();

const PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
    const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <View style={styles.container}>
  <NestedScreen.Navigator initialRouteName="DefaultPosts" >
    <NestedScreen.Screen name="DefaultScreen" component={DefaultScreen} options={{
          title: 'Публікації',
      headerLeft: false,
      headerRight: () => (
                <TouchableOpacity style={styles.btnLogOut} activeOpacity={0.8} onPress={signOut}>
                <Feather name="log-out" size={24} color="#212121" />
                </TouchableOpacity>
            ),}} />
      <NestedScreen.Screen name="Comment" component={CommentScreen}
        options={{
          title: 'Коментарі',}}/>
      <NestedScreen.Screen name="Map" component={MapScreen}
      options={{
          title: 'Карта',}}/>
      </NestedScreen.Navigator >
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
  },
  btnLogOut: {
    marginRight: 16,
  },
  icon: {
    color: '#fff',
  },
})

export default PostsScreen;
