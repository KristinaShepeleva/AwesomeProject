import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BgImage from '../assets/image/photo_bg.jpg';


export default function RegistrationScreen () {
     const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss(); 
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBg}
                source={BgImage}>
    
                <KeyboardAvoidingView
                 // behavior={Platform.OS = "ios" ? "padding" : "height"}
                >
                    <View style={styles.form}>

                        <View style={styles.addPhoto}><View style={styles.photo}></View></View>
                        <Text style={styles.title}>Реєстрація</Text> 
                        

                        <TextInput style={styles.input} placeholder="Логін"
                             onFocus={() => setIsShowKeyboard(true)}/>

                        <TextInput style={styles.input} placeholder="Адреса електронної пошти"
                             onFocus={() => setIsShowKeyboard(true)}
                        />
     
                        <View style={styles.inputPassword}>
                            <TextInput style={styles.input} placeholder="Пароль"
                                secureTextEntry={true}
                                 onFocus={() => setIsShowKeyboard(true)}
                            />
                            <TouchableOpacity activeOpacity={0.8} style={styles.inputBtn}>
                                <Text style={styles.inputBtn}>Показати</Text>
                                </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btn}
                         onPress={keyboardHide}
                        >
                            <Text style={styles.btnText}>Зареєстуватися</Text> 
                        </TouchableOpacity>
                        <View style={styles.wrapLogIn}>
                        <Text style={styles.textLogIn}>Вже є акаунт?</Text>
                        <TouchableOpacity activeOpacity={0.8}><Text style={styles.btnLogIn}>Увійти</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    


                </KeyboardAvoidingView>
            </ImageBackground>

            </View> 
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
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
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
        marginBottom: 42,
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
        paddingBottom: 80,
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