import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={[tw`text-red-500 p-10`, styles.text]}>
        I am the home screen
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
})
