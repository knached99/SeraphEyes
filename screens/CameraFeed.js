import {View, Text,  StyleSheet, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
export default function CameraFeed({setIsAuthenticated}) {
    return(
        <View>
            <Image source={{uri: 'https://d33wubrfki0l68.cloudfront.net/0a619155c82b694e2267f3ed5c752919b707e33b/ef36f/static/svg_waves-3c1f0a785319462f6dce04d227eaf664.jpg'}} style={styles.image}/>
            <Text style={styles.title}>Whoops!</Text>
            <Text style={styles.description}>Looks like there are no connected cameras at this time</Text>
            <Button mode="contained" 
              onPress={() => setIsAuthenticated(false)}
                style={styles.btn}>
                <Text style={styles.text}>Logout</Text>
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
        fontSize: 20,
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
        color: '#ff455e',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
        fontWeight: '600'
    }
})