import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BgImage from '../../assets/images/photo/photo_bg.jpg';

import { useDispatch } from 'react-redux';
import { authSignInUser } from '../../redux/auth/authOperations';
import { authStateChange } from '../../redux/auth/authReducer';



export default function LoginScreen () {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isShow, setShow] = useState(true);

    const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss(); 
    }

    const setData = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        //   if (!email.trim() || !password.trim()) {
        //       return Alert.alert('Будь ласка заповніть поля');
        //   }; 
          
        // if (!emailPattern.test(email)) {
        //     return Alert.alert('Помилка валідації', 'Будь ласка, введіть дійсну поштову адресу.');
        // }
        

        dispatch(authSignInUser({ email, password }));
        dispatch(authStateChange({ stateChange: true }));
        // navigation.navigate('Home', { user: { email, password } })
console.log("login",{email, password});

         keyboardHide();
        setEmail(null);
        setPassword(null);
        
    };

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

                        <Text style={styles.title}>Увійти</Text> 
                         <View style={styles.inputEmail}>
                        <TextInput style={styles.input} placeholder="Адреса електронної пошти"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={email}
                            onChangeText={setEmail}
                                />
                                </View>
     
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
                            <Text style={styles.btnText}>Увійти</Text> 
                        </TouchableOpacity>
                        <View style={{...styles.wrapLogIn, marginBottom: isShowKeyboard ? (Platform.OS === 'ios' ? 20 : 190) : 120}}>
                        <Text style={styles.textLogIn}>Немає акаунту?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Registration")}><Text style={styles.btnLogIn}>Зареєструватися</Text>
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
        marginTop: 32,
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
    }
});