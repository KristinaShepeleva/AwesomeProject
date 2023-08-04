import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, Alert  } from "react-native";
import BgImage from '../../assets/images/photo/photo_bg.jpg';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons'; 

const initialState = {
    nikename: "",
    email: "",
    password: "",
}

export default function RegistrationScreen () {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [isShow, setShow] = useState(true);

    const navigation = useNavigation();

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss(); 
    }

    const setData = () => {
        const email  = state.email;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailPattern.test(email)) {
            Alert.alert('Помилка валідації', 'Будь ласка, введіть дійсну поштову адресу.');
        } else {
           setIsShowKeyboard(false);
           Keyboard.dismiss(); 
           console.log(state);
           setState(initialState);
        };  
    }

    const setShowPassword = () => {
        setShow(isShow => !isShow);
    }

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

                            <View style={styles.addPhoto}><View style={styles.photo}><TouchableOpacity style={styles.iconAdd}><AntDesign name="pluscircleo" size={24} color="#FF6C00" /></TouchableOpacity></View>
                            </View>
                        
                        <Text style={styles.title}>Реєстрація</Text> 
<View>
                        <TextInput style={styles.input} placeholder="Логін"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.nikename}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, nikename: value }))}
                            /></View>
<View>
                        <TextInput style={styles.input} placeholder="Адреса електронної пошти"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.email}
                                autoComplete="email"
                            onChangeText={(value) => setState((prevState) => ({...prevState, email: value }))}
                        /></View>
                        
                        <View style={styles.inputPassword}>
                            <TextInput style={styles.input} placeholder="Пароль"
                                secureTextEntry={isShow}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.password}
                            onChangeText={(value) => setState((prevState) => ({...prevState, password: value }))}
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
        width: '100%',
        position: 'absolute',
        top: -60,
        left: 16,
        right: 16,
        flex: 1,
        alignItems: 'center',
    },
    photo: {
        position: 'relative',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    iconAdd: {
        position: 'absolute',
        bottom: 14,
        right: -12,
        borderRadius: 100,
        backgroundColor: "#ffffff",
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