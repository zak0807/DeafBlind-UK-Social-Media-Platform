import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const OnBoarding= ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} >
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Image 
            //resizeMode="contain"
            source={require("../assets/Jp_DeafblindLogo.png")}
            style = {{ height: '20%',width: '80%'}}/>
            <Image 
            //resizeMode="contain"
            source={require("../assets/deafblindstick.png")}
            style = {{ height: '35%',width: '60%'}}/>
            <StatusBar style="auto" />

            <Text></Text>
            <Text style={{marginTop:'2%',fontSize:30, color: '#000'}}>Welcome to </Text>
            <Text style={{fontSize:30, color: '#000'}}>Deafblind UK</Text>
            <Text></Text>
            
            <Text style={{fontSize:30, color: '#000'}}>social community</Text>
            
            <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate('LogScreen')}>
                <Text style={{fontSize:40, color: 'black'}}>NEXT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    next: {
        position: 'absolute',
        top: 100,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: '#fff',
    },

    logButton: {
        justifyContent: "center",
        height: 50,
        alignItems: "center",
        marginTop: 10,
        borderRadius: 25,
        backgroundColor: 'yellow',
        width: "80%",
    },
})

export default OnBoarding;