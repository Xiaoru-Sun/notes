import React from "react";
import { StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";

type Props = {
  saveNote: (input: string) => void;
};

export const EditNotes = ({ saveNote }: Props): JSX.Element => {
  const [input, setInput] = useState<string>("");
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
          saveNote(input);
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
