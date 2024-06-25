import React, { useEffect } from "react";
import { StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";
import { getNoteById, saveNote } from "../services/noteServices";

type Props = {
  noteId: string | undefined;
};

export const EditNotes = ({ noteId }: Props): JSX.Element => {
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    if (noteId) {
      getNoteById(noteId).then((result) => setInput(result?.text ?? ""));
    }
  }, []);

  const saveNoteHandler = () => {
    saveNote(input, noteId);
  };
  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        autoFocus={true}
      ></TextInput>
      <Button
        title="Save"
        onPress={() => {
          saveNoteHandler();
        }}
      ></Button>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: 200,
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});
