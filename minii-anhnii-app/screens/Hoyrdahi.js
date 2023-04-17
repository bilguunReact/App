import { StatusBar } from "expo-status-bar"
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, TouchableOpacity, } from "react-native"
import { StackActions } from "@react-navigation/native";
  
  export default function Hoyrdahi({ navigation, greeting }) {
        return (
        <SafeAreaView>
            <ScrollView style={styles.helbar} horizontal={true}>
            <TouchableOpacity onPress={() => navigation.popToTop()}>
                    <View style={styles.border}>
                        <Text>Гэр бүл</Text>
                    </View>
            </TouchableOpacity>
                <View style={styles.border}>
                <Pressable>
                <Text style={styles.hor}>Чадвар</Text>
                </Pressable></View>
                <View style={styles.border}>
                <Pressable>
                <Text style={styles.hor}>Спорт</Text>
                </Pressable></View>
                <View style={styles.border}>
                <Pressable>
                <Text style={styles.hor}>Хичээл</Text>
                </Pressable></View>
                <View style={styles.border}>
                <Pressable>
                <Text style={styles.hor}>Ном</Text>
                </Pressable></View>
                
            </ScrollView>
          <ScrollView>
        <View style={styles.container}>
         <Text>{greeting}</Text>
         <Button 
            title="Гурав дахь нүүр "
            onPress={() => navigation.push("Guravdahi")}
         />
          <Button 
            title="Гурав дахь нүүр дахин"
            onPress={() => {
                 navigation.dispatch(
                    StackActions.replace('Guravdahi')
                 );
            }}
         />
         <StatusBar style="auto"/>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        flexDirection: 'row',
        borderRadius: 20, 
        width: 100,
        height: 40,        
        backgroundColor: 'white',
        alignItems:'center', 
        justifyContent:'center',
        margin: 7,
        borderColor: `#696969`,
        borderWidth: 2,
        fontWeight: 5,
    },
   title: {
    textAlign: 'center',

   }

    
})
