import React from "react";
import { StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";
import { EditNotes } from "./EditNotes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CreateNotes = () => {
  const saveNote = async (input: string) => {
    await AsyncStorage.setItem("note", input);
  };

  return (
    <>
      <EditNotes saveNote={saveNote} />
    </>
  );
};
