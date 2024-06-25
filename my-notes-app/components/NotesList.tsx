import React, { useState } from "react";
import { Note, getAllNotes } from "../services/noteServices";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScreenNavigationProp } from "../types";

export const NotesList = () => {
  const [noteList, setNoteList] = useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigationProp>();

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
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate("Notes", { noteId: note.id });
            }}
          >
            <View style={styles.row}>
              <Text style={styles.noteText}>
                {note.text.length === 0 ? "(Blank note)" : note.text}
              </Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: "smokewhite",
  },
});
