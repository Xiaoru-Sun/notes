import React, { useState } from "react";
import { Note, getAllNotes } from "../services/noteServices";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text } from "react-native";

export const NotesList = () => {
  const [noteList, setNoteList] = useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then((result) => {
      setNoteList(result.notes);
    });
  });

  return (
    <View>
      <Text>All recent notes</Text>
      {noteList.map((note, index) => (
        <Text key={index}>{note.text}</Text>
      ))}
    </View>
  );
};
