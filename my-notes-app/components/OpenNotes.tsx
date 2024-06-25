import React, { useLayoutEffect } from "react";
import { EditNotes } from "./EditNotesScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EditScreenRouteProp, ScreenNavigationProp } from "../types";
import { Button } from "react-native";

export const OpenNotes = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit Note" : "New Note",
      headerRight: () => (noteId ? <Button title="Delete"></Button> : <></>),
    });
  }, [navigation]);

  return (
    <>
      <EditNotes noteId={noteId} />
    </>
  );
};
