import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
const myImage = require('../assets/icon.png');
import { Button } from 'react-native-paper';
export default function Auth({onAuthenticate}) {
    return(
        <View>
            <Image source={myImage} style={styles.image}/>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Protect your home with the eyes of an Angel. SeraphEyes provides fully-customizable home protection that allows you to synchronize multiple devices in an IoT network.</Text>
            <Button mode="contained" 
                onPress={onAuthenticate}
                style={styles.btn}>
                <Text style={styles.text}>Authenticate</Text>
            </Button>
        </View>
    )

}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 400,
        height: 461,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    title: {
        fontSize: 50,
        fontWeight: '900',
        marginVertical: 30,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    }
})