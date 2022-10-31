import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Image, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon } from 'react-native-vector-icons';

//temp storage of automated todays quote change
const Quotes = ["Some of the most wonderful people are the ones who don’t fit into boxes.","Why fit in when you were born to stand out?", "They laugh at me because I am different. I laugh at them because they’re all the same.","All children with special needs have a right to be part of a family, a community and society. "];


const HomePage= ({navigation}) => {
    const [quote, setQuote] = useState("");
    const quote_mixer = useCallback(() => {
    const index = Math.floor(Math.random() * Quotes.length);
        setQuote(Quotes[index]);
    }, []);
    useEffect(() => {
        const shuffle_Timer = setInterval(quote_mixer, 5000);
        return () => clearInterval(shuffle_Timer);
    }, [quote_mixer])
    return (
        
        <ScrollView>   
        <SafeAreaView style={styles.container} >
            <StatusBar style="auto" />
            <Text style={{fontSize:42, color: 'black', alignSelf: 'flex-start', marginLeft: '5%' ,marginTop: '5%'}}>Hello,</Text>
            <Text style={{alignSelf: 'flex-start', fontSize:42, color: 'black', marginLeft: '5%'}}>John Smith</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'black' ,fontSize:32,alignSelf: 'left'}}>Todays Quote:</Text>
            <Text></Text>
            <Text style={{fontSize:20, color: 'black', borderTopColor:'black' ,alignSelf: 'center',margin: '1%'}}>"{quote}"</Text>

            <Text></Text>
            <Text style={{fontSize:32, color: 'black', alignSelf: 'flex-start', marginLeft: '5%' }}>Topics  </Text>
            <Text></Text>
            <TouchableOpacity style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24.99,
            height: 49.9,
            marginTop: 10,
            backgroundColor: "yellow",
            borderWidth: 2,
            borderColor: 'black' ,
            width: "80%"}} 
            onPress={() => navigation.navigate('PersonalFinance')}>
                <Text style={{fontSize:32, color: 'black'}}>😃 Profile 😊</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24.99,
            height: 49.9,
            marginTop: 10,
            backgroundColor: 'yellow',
            borderWidth: 2,
            borderColor: 'black' ,
            width: "80%"}} 
            onPress={() => navigation.navigate('')}>
                <Text style={{fontSize:32, color: 'black'}}>💬 Forum 💬</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24.99,
            height: 49.9,
            marginTop: 10,
            backgroundColor: 'yellow',
            borderWidth: 2,
            borderColor: 'black',
            width: "80%" }} 
            onPress={() => navigation.navigate('')}>
                <Text style={{fontSize:32, color: 'black'}}>📬 Post </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{        
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24.99,
            height: 49.9,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: 'yellow',
            borderWidth: 2,
            borderColor: 'black' ,
            width: "80%"}} 
            onPress={() => navigation.navigate('')}>
                <Text style={{fontSize:32, color: 'black'}}>🎤 Events 🥳</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{        
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24.99,
            height: 49.9,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: 'yellow',
            borderWidth: 2,
            borderColor: 'black' ,
            width: "80%"}} 
            onPress={() => navigation.navigate('')}>
                <Text style={{fontSize:32, color: 'black'}}>👥 Find Friends 👥</Text>
            </TouchableOpacity>
            
            <Text></Text>
            <TouchableOpacity
            style={{
              borderWidth:1,
              borderColor:"white",
              alignItems: "center",
              top:0,
              right:20,
              height:100,
              justifyContent: "center",
              width:100,
              position: "absolute"
            }}
            >
              <Image source={require("../assets/BobHello.png")}
            style = {{width: '85%', height: '85%'}}/>
            </TouchableOpacity>
        
        <Text style={{fontSize:32, color: 'black', margin: 20, alignSelf: 'flex-start', marginLeft: '5%' }}> Useful Site 📺</Text>
        <WebView
              style={{ marginTop: 1, width: 370, height: 300 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              mediaPlaybackRequiresUserAction={true}
              source={{ uri: "https://deafblind.org.uk/" }}
        />
        <Text style={{fontSize:32, color: 'black', margin: 20, alignSelf: 'flex-start', marginLeft: '5%'}}> Educational Links </Text>

        <WebView
              style={{ marginTop: 1, width: 370, height: 300 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              mediaPlaybackRequiresUserAction={true}
              source={{ uri: "https://deafblind.org.uk/get_support/what-is-deafblindness/" }}
        />
        <TouchableOpacity style={styles.forum_Button} onPress={() => navigation.navigate('DiscussionForum')}>
                <Text style={{fontSize:32, color: 'black'}}>Assistance Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logButton} onPress={() => navigation.navigate('HelpScreen')}>
                <Text style={{fontSize:32, color: 'black'}}>Help & Guide</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('LogScreen')}>
                <Text style={{fontSize:32, color: 'black'}}>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </ScrollView> 


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

    forum_Button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: 'yellow',
        width: "80%",
        borderRadius: 25,
        height: 50,
    },

    signOutButton: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: 'yellow',
        marginBottom:20,
        width: "80%",
        borderRadius: 25,
        height: 50,
    },
})

export default HomePage;