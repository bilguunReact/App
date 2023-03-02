import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{color: "teal"}}> Миний анхны апп </Text>
        <Text style={styles.myemoji}> Тавтай морил &#128526;</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39a0ca",
    alignItems: "center",
    justifyContent: "center"
  },
  myemoji: { fontSize: 20 }
})
