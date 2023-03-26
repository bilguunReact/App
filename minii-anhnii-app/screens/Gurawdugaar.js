import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
  
  export default function Gurawdugaar ({ navigation}) {
        return (
        <View style={styles.container}>
         <Text>Гурав</Text>
         <Button title="Нүүр" onPress={() => navigation.popToTop()}/>
         <Button title="Мэргэжил" onPress={() => navigation.pop()}/>
         <StatusBar style="auto"/>
        </View> 
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
})
