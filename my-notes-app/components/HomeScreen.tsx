import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { NotesList } from "./NotesList";

export const HomeScreen = (): JSX.Element => {
  return (
    <View>
      <NotesList></NotesList>
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
