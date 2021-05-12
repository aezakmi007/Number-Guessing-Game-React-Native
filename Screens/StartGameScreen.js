import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inpoutContainer}>
        <Text>Select a Number!</Text>
        <TextInput />
        <View style={styles.buttonContaniner}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inpoutContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContaniner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
