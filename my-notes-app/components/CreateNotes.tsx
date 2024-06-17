import React from "react";
import { StyleSheet, Button, TextInput } from "react-native";
import { EditNotes } from "./EditNotes";
import { saveNote } from "../services/noteServices";

export const CreateNotes = () => {
  return (
    <>
      <EditNotes saveNote={saveNote} />
    </>
  );
};
