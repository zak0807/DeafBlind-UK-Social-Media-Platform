import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

const DiscussionForum= ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={styles.container} >
            <Text style={{alignSelf: 'flex-start', marginLeft: '5%' ,marginTop: '5%' , fontSize:42, color: 'black'}}>Assistance Call</Text>
            <Text style={{fontSize:28, color: 'black', margin: '5%'}}>On this page you will be able to directly call our anonymous line if you feel lonely and need help.</Text>
            <Text style={{fontSize:70, textAlign:'center'}}>🏗</Text>
            <Text style={{fontSize:32, color: 'black', margin: '3%'}}>* 🏗 This page is currentry under construction 🚜 *</Text>

            <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
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

export default DiscussionForum;