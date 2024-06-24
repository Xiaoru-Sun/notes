import React from "react";
import { StyleSheet, Button, TextInput } from "react-native";
import { EditNotes } from "./EditNotes";
import { saveNote } from "../services/noteServices";
import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../types";

export const CreateNotes = () => {
  const route = useRoute<EditScreenRouteProp>();
  const noteId = route.params.noteId;
  return (
    <>
      <EditNotes saveNote={saveNote} noteId={noteId} />
    </>
  );
};
