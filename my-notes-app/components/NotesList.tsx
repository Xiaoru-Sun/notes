import React, { useState } from "react";
import { Note, getAllNotes } from "../services/noteServices";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";

export const NotesList = () => {
  const [noteList, setNoteList] = useState<Note[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      getAllNotes().then((result) => {
        setNoteList(result.notes);
      });
    }, [noteList])
  );

  return (
    <View>
      <ScrollView>
        {noteList.map((note, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.noteText}>
              {note.text.length === 0 ? "(Blank note)" : note.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  noteText: {
    fontSize: 16,
    paddingVertical: 20,
    width: "100%",
  },
  row: {
    borderColor: "e6e6e6",
    borderBottomWidth: 1,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
  },
});
