
import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, KeyboardAvoidingView, TextInput, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import { Feather } from '@expo/vector-icons';


const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  const [cameraRef, setCameraRef] = useState(null);
  
  const [postPhoto, setPostPhoto] = useState('');
  const [postName, setPostName] = useState('');
  const [postAddress, setPostAddress] = useState('');
  const [postLocation, setPostLocation] = useState(null);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  
  useEffect(() => {

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPostLocation(coords);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
     if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPostPhoto(uri);
    };
    
  };

  const onSendPost = () => {
    if (!postPhoto || !postName.trim())
      return Alert.alert('Будь ласка заповніть поля');
    
    //console.log(postPhoto);

    navigation.navigate("DefaultScreen",
      {
        postPhoto,
        postName,
        postAddress,
        postLocation,
      });
    keyboardHide();
    clearForm();
  };

    const clearForm = () => {
    setPostPhoto('');
    setPostName('');
    setPostAddress('');
    setPostLocation(null);
  };

   const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss(); 
    }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
  <View style={styles.container}>
         <View style={styles.takePhotoContainer}>
          <Camera style={styles.camera} ref={setCameraRef}>
            
            {postPhoto && (
              <Image source={{ uri: postPhoto }} style={styles.postPhoto} />
            )}
            <TouchableOpacity activeOpacity={0.8} onPress={takePhoto} style={styles.btnContainer}>
            <Feather style={styles.btn} name="camera" size={24} color="BDBDBD" />
          </TouchableOpacity>
          </Camera>
          </View>

      <View> 
        <Text style={styles.photoText}>
            {postPhoto ? 'Редагувати фото' : 'Завантажте фото'}
          </Text>
        </View>
        
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View> 
         <TextInput
              style={ styles.inputName}
              placeholderTextColor="#bdbdbd"
              placeholder="Назва..."
              autoComplete="off"
              autoCapitalize="none"
              value={postName}
              onChangeText={setPostName}
            />
       <View
              style={styles.locationInputWrapper}
            >
              <TextInput
                style={styles.inputLocation}
                placeholderTextColor="#bdbdbd"
                placeholder="Місцевість..."
                autoComplete="off"
                autoCapitalize="none"
                value={postAddress}
                onChangeText={setPostAddress}
              />
              <Feather style={styles.iconLocation} name="map-pin" size={24} color="black" />
        </View>

      </View>
       
        <TouchableOpacity style={{...styles.btnSend, backgroundColor: !postPhoto || !postName ? '#f6f6f6' : '#ff6c00',}} activeOpacity={0.8} onPress={onSendPost}>
          <Text style={{...styles.btnText, color: !postPhoto || !postName ? '#bdbdbd' : '#ffffff',}}>Опубліковати</Text>
        </TouchableOpacity>
          
           </KeyboardAvoidingView>
</View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',     
  },
  takePhotoContainer: {
      height: 240,
      marginBottom: 8,
  },
  camera: {
      height: 240,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
  },
  postPhoto: {
    position: "absolute",
    height: 240,
    width: "100%",
    top: 0,
    left: 0,
  },
  btnContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    color: '#BDBDBD',
  },

  photoText: {
    fontWeight: 400,
    fontSize: 16,
    marginTop: 4,
    color: '#BDBDBD',
  },
  inputName: {
    height: 50,
    fontSize: 16,
    paddingVertical: 16,
    marginBottom: 16,
    marginTop: 32,
    
    color: '#212121',
    backgroundColor: '#ffffff',

    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  locationInputWrapper: {
    position: 'relative',
      alignContent: 'center',
  },
  inputLocation: {
    position: 'relative',
    height: 50,
    fontSize: 16,
    paddingLeft: 32,
    marginBottom: 32,
    
    color: '#212121',
    backgroundColor: '#ffffff',

    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  iconLocation: {
    position: "absolute",
    top: 8,
    left: 0,
    color: "#BDBDBD",
  },
  btnSend: {
     height: 50,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    marginBottom: 16,
    
  },
    btnText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
  },
});

export default CreatePostsScreen;
