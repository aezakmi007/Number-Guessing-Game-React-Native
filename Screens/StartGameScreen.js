import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";
import colors from "../constants/color";

function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inpoutContainer}>
        <Text>Select a Number!</Text>
        <TextInput />
        <View style={styles.buttonContaniner}>
          <View style={styles.buttons}>
            <Button title="Reset" onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.buttons}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
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
  buttons: {
    width: 90,
  },
});

export default StartGameScreen;
