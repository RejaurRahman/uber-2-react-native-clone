import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>I am the home screen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: "#eee"
  }
})
