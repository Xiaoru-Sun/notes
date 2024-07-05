import React from "react";
import { Pressable } from "react-native";
import { deleteNoteById } from "../services/noteServices";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  noteId: string;
};

export const DeleteNote = ({ noteId }: Props): JSX.Element => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const deleteNoteHandler = async () => {
    await deleteNoteById(noteId);
    navigation.navigate("Home");
  };
  return (
    <Pressable onPress={deleteNoteHandler}>
      <FontAwesome name="trash-o" size={30}></FontAwesome>
    </Pressable>
  );
};
