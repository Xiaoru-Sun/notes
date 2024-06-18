import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { Note, getAllNotes } from "../services/noteServices";

export const Home = (): JSX.Element => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const [noteList, setNoteList] = useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => {
      setNoteList(result.notes);
    });
  });

  return (
    <View>
      <Text style={styles.home}>Home Screen</Text>
      <Text>All recent notes</Text>
      <View>
        {noteList.map((note, index) => (
          <Text key={index}>{note.text}</Text>
        ))}
      </View>
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
