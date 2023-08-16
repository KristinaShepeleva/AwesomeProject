import React from "react";
import { Text, View, StyleSheet, Image  } from 'react-native';

const CommentScreen = ( {route, navigation }) => {

  console.log(route.params);
return (
    <View style={styles.container}>
    <Text>CommentsScreen</Text>
    <View style={styles.imageContainer}>
      <Image style={styles.postImg} source={{ uri: `${route.params}` }} />
      </View>
    </View>
  );
}

export default CommentScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingTop: 32,

    backgroundColor: '#fff',
  },
  postImg: {
    height: 240,
    width: '100%',
    marginBottom: 28,

    backgroundColor: '#f6f6f6',

    borderRadius: 8,
  },
})