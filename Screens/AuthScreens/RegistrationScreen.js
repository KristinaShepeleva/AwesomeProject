import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, Alert  } from "react-native";
import BgImage from '../../assets/images/photo/photo_bg.jpg';
import { AntDesign } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import { useDispatch } from 'react-redux';

import { authSignUpUser } from '../../redux/auth/authOperations';
import { authStateChange } from '../../redux/auth/authReducer';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../frebase/config';

export default function RegistrationScreen() {
     
const [isShowKeyboard, setIsShowKeyboard] = useState(false);
const [isShow, setShow] = useState(true);

const [avatar, setAvatar] = useState(null);
const [nikename, setNikename] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
    
    
const dispatch = useDispatch();
const navigation = useNavigation();

const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    };

    const clearForm = () => {
    setAvatar(null);
    setNikename(null);
    setEmail(null);
    setPassword(null);
}


const setData = async () => {
        // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // if (!emailPattern.test(email)) {
        //     Alert.alert('Помилка валідації', 'Будь ласка, введіть дійсну поштову адресу.');
        // } else { };
        
    const photo = await uploadImageToServer(avatar);
            
    dispatch(authSignUpUser({photo, nikename, email, password }));
    dispatch(authStateChange({ stateChange: true }));

    setIsShowKeyboard(false);
    Keyboard.dismiss(); 
           
    clearForm();   
    }

const setShowPassword = () => {
        setShow(isShow => !isShow);
    };

    
    const onLoadAvatar = async () => {
    
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Ви відмовилися дозволити цій програмі доступ до ваших фотографій');
      return;
      };
      
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
        
    if (!result.canceled) {
        const img = `${result.assets[0].uri}`;
        setAvatar(img);
      }  
    };
    
const uploadImageToServer = async (avatar) => {
    const response = await fetch(avatar);
    const file = await response.blob();

    const uniqueImageId = Date.now().toString();
    const path = `avatar/${uniqueImageId}.jpeg`;

    const storageRef = ref(storage, path);

    const metadata = {
      contentType: 'avatar/jpeg',
    };

    await uploadBytes(storageRef, file, metadata);
    const downloadPhoto = await getDownloadURL(storageRef);
    return downloadPhoto;
  };
 
    
    
return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
            
                
            <ImageBackground
                style={styles.imageBg}
                source={BgImage}>
    
                <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
                        <View style={styles.form}>
                            
<View style={styles.addPhoto}>
              <Image style={styles.photo} source={{ uri: avatar }} />
              <TouchableOpacity
                style={styles.iconAddTouchable}
                onPress={onLoadAvatar}
              >
                <AntDesign style={styles.icon} name="pluscircleo" size={24} color="#FF6C00" />
              </TouchableOpacity>
            </View>

                        
                        <Text style={styles.title}>Реєстрація</Text> 
<View>
                        <TextInput style={styles.input} placeholder="Логін"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={nikename}
                                onChangeText={setNikename}
                            /></View>
<View>
                        <TextInput style={styles.input} placeholder="Адреса електронної пошти"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={email}
                                autoComplete="email"
                            onChangeText={setEmail}
                        /></View>
                        
                        <View style={styles.inputPassword}>
                            <TextInput style={styles.input} placeholder="Пароль"
                                secureTextEntry={isShow}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={password}
                            onChangeText={setPassword}
                            />
                            <TouchableOpacity activeOpacity={0.8} style={styles.inputBtn}>
                                <Text style={styles.inputBtn} onPress={setShowPassword}>Показати</Text>
                                </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                         onPress={setData}
                        >
                            <Text style={styles.btnText}>Зареєстуватися</Text> 
                        </TouchableOpacity>
                        <View style={{...styles.wrapLogIn, marginBottom: isShowKeyboard ? (Platform.OS === 'ios' ? 20 : 190) : 60}}>
                        <Text style={styles.textLogIn}>Вже є акаунт?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Login")}><Text style={styles.btnLogIn}>Увійти</Text>
                        </TouchableOpacity>
                    </View>
                    </View> 
                    
                </KeyboardAvoidingView>
            </ImageBackground>
            </View> 
            </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
        backgroundColor: '#fff',
        
    },
    imageBg: {
        flex: 1,
        justifyContent: 'flex-end',
        height: 'auto',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 30,
        color: '#212121',
        marginTop: 92,
        marginBottom: 32,
        textAlign: 'center',
        fontWeight: 500,
        letterSpacing: 0.3,
    },
    form: {
        position: 'relative',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    addPhoto: {
        width: "100%",
        position: 'relative',
        top: -60,
        alignItems: 'center',
  },
  photo: {
     position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
  },

    iconAddTouchable: {
        position: 'relative',
        
        borderRadius: 100,
        backgroundColor: "#ffffff",
    },
    icon: {
        position: 'absolute',
        bottom: -108,
        right: -72,
    },

    input: {
        height: 50,
        borderStyle: 'solid',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        padding: 16,
        marginBottom: 16,
        color: '#212121',
        fontSize: 16

    },
    inputPassword: {
        marginBottom: 16,
        position: 'relative',
    },
    inputBtn: {
        position: 'absolute',
        right: 8,
        top: 8,
        color: '#1B4371',
        fontSize: 16
    },
    btn: {
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
    wrapLogIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogIn: {
        fontSize: 16,
        color: '#1B4371',
    },
    btnLogIn: {
        fontSize: 16,
        color: '#1B4371',
    },
});