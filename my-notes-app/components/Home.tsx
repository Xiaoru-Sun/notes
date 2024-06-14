import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const Home = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.home}>Home Screen</Text>
      <Pressable style={styles.button} onPress={() => }>
        <Text style={styles.save}>New Note</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    fontSize: 22,
    marginBottom: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  save: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.25,
    lineHeight: 25,
  },
});
