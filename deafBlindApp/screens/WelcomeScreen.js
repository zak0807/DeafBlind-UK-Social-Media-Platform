import { ImageBackground , StyleSheet} from 'react-native';
import React from 'react';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
        <Image 
        resizeMode="contain"
        source={require("../assets/Bath_Logo_Flare.gif")}
        style = {{width: '100%', height: '80%'}}/>
        <Text style={styles.titleText}> Welcome to Bath Financial Knowledge</Text>
        <Button
          syles={styles.next}
          color="#7E7DF1"
          title="NEXT" onPress={() => console.log("Button tapped")}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({

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
    

})

export default WelcomeScreen;