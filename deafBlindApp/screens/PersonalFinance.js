import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Button, StyleSheet, SafeAreaView, TouchableOpacity, Icons } from 'react-native';

const PersonalFinance= ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="auto" />
            <Text style={{alignSelf: 'flex-start', marginLeft: '5%' ,marginTop: '5%' , fontSize:22, color: '#333866'}}>Personal Finance</Text>
            <Text style={{fontSize:12, color: '#333866', margin: '5%'}}>Personal finance covers managing your money as well as saving and investng. This topic is divided into six topic.{'\n'}
            {'\n'}What are you waiting for? Go ahead and explore :)</Text>
            <Text style={{alignSelf: 'flex-start', marginLeft: '5%' ,  fontSize:22, color: '#333866'}}>Personal Finance Topics</Text>
            <Text></Text>
            <TouchableOpacity style={{        width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: '#604DD6' }} 
            onPress={() => navigation.navigate('IncomeAndTaxes')}>
                <Text style={{fontSize:16, color: '#333866'}}>💰 Income and Taxes 💰</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity style={{        width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: '#FBBD30' }} 
            onPress={() => navigation.navigate('Spending')}>
                <Text style={{fontSize:16, color: '#333866'}}>Spending</Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity style={{        width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: '#4DD6D3' }} 
            onPress={() => navigation.navigate('SavingAndBudgeting')}>
                <Text style={{fontSize:16, color: '#333866'}}>🏦 Saving and Budgeting 🏦</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{        width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: '#FBBD30' }} 
            onPress={() => navigation.navigate('InterestAndDebt')}>
                <Text style={{fontSize:16, color: '#333866'}}>🧾 Interest and Debt 🧾</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{        width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: '#CE4DD6' }} 
            onPress={() => navigation.navigate('Investment')}>
                <Text style={{fontSize:16, color: '#333866'}}>📈 Investment 📈</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{        width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "#fff",
            borderWidth: 2,
            borderColor: '#3DA337' }} 
            onPress={() => navigation.navigate('Protection')}>
                <Text style={{fontSize:16, color: '#333866'}}>🆘 Protection 🆘</Text>
            </TouchableOpacity>
            
            <Text></Text>

            <Text style={{alignSelf: 'flex-start', marginLeft: '5%' ,  fontSize:22, color: '#333866'}}>Take some notes here 😊</Text>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('NotesScreen')}>
                <Text style={{fontSize:20, color: 'white'}}>📓  Notes 📓</Text>
            </TouchableOpacity>
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    next: {
        position: 'absolute',
        top: 100,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#7E7DF1",
    },
})

export default PersonalFinance;