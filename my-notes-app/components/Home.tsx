import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { NotesList } from "./NotesList";

export const Home = (): JSX.Element => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View>
      <NotesList></NotesList>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Notes")}
      >
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
