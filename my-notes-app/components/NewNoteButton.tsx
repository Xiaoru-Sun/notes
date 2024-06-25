import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

export const NewNoteButton = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Pressable
      onPress={() => navigation.navigate("Notes", { noteId: undefined })}
    >
      <FontAwesome name="pencil-square-o" size={28}></FontAwesome>
    </Pressable>
  );
};
