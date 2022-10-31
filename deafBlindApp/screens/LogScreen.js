import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Button, Title } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const emailList = ["John", "Bob@gmail.com"]
const passwordList = ["123", "123"]


const LogScreen= ({navigation}) => {    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function checkParams() {
        x = false;
        y = false;

        if (emailList.includes(email)) {
            x = true;
        }

        if (passwordList.includes(password)) {
            y = true;
        }

        if (x && y) {
            return true;
        }
        else {
            return false;
        }
    }
    
    return (
   
    
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text></Text>
        <Text></Text>
        <Image style={styles.image} source={require("../assets/signonlogo.png")} />
        <Text style={{marginBottom: 1, fontSize: 40, alignItems: 'center', color: '#333866',textAlign: "center"}}></Text>
        <Text style={{marginBottom: 1, fontSize: 32, alignItems: 'center', color: '#333866', textAlign: "center"}}>Deafblind UK Community</Text>

        
        <StatusBar style="auto" />
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Username:"
            placeholderTextColor="#fff"
            onChangeText={(email) => setEmail(email)}
            />
        </View>
    
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password:"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />
        </View>
    
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => checkParams() ? navigation.navigate('HomePage') : console.log("No")}>
                <Text style={{fontSize:40, color: 'black'}}>LogIn</Text>
        </TouchableOpacity>
        
        </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        //justifyContent: "center",
    },
    
    image: {
        width: '50%',
        height: '75%',
        marginTop:2,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 0
        
    },
    
    inputView: {
        backgroundColor: "#333866",
        borderRadius: 30,
        width: "100%",
        height: 45,
        marginBottom: 10,
        fontSize:25,
        textAlign: "left",
    
        alignItems: "left",
    },
    
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 0,
        fontSize:25,
        color: "#fff",
        textTransform:'lowercase',
        font:40,
        textAlign: "left",

    },
    
    forgot_button: {
        height: 30,
        marginBottom: 0,
        fontSize:25,
        alignItems: "left",
        justifyContent: "left",
        textAlign: "left",
    },
    
    loginBtn: {
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: 'yellow',
    },
    });

export default LogScreen;