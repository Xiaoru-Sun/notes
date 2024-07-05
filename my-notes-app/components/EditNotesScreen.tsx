import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";
import { getNoteById, saveNote } from "../services/noteServices";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId: string | undefined;
};

export const EditNotes = ({ noteId }: Props): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    if (noteId) {
      getNoteById(noteId).then((result) => setInput(result?.text ?? ""));
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote input={input} noteId={noteId}></SaveNote>,
    });
  }, [navigation, input]);

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        autoFocus={true}
      ></TextInput>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    flex: 1,
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});
