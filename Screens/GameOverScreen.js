import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game Is Over</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;
