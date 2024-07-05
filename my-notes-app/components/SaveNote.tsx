import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { saveNote } from "../services/noteServices";

type Props = {
  noteId: string | undefined;
  input: string;
};
export const SaveNote = (props: Props) => {
  const { input, noteId } = props;
  const navigation = useNavigation<ScreenNavigationProp>();
  const saveNoteHandler = async () => {
    await saveNote(input, noteId);
    navigation.navigate("Home");
  };
  return (
    <Pressable onPress={saveNoteHandler}>
      <Ionicons name="chevron-back" size={30}></Ionicons>
    </Pressable>
  );
};
