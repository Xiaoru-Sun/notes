import React, { useLayoutEffect } from "react";
import { EditNotes } from "./EditNotesScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EditScreenRouteProp, ScreenNavigationProp } from "../types";
import { DeleteNote } from "./DeleteNoteButton";
import { Button } from "react-native";
import { deleteNoteById } from "../services/noteServices";

export const OpenNotes = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit Note" : "New Note",
      headerRight: () =>
        noteId ? <DeleteNote noteId={noteId}></DeleteNote> : <></>,
      // noteId ? (
      //   <Button
      //     title="Delete"
      //     onPress={() => deleteNoteById(noteId)}
      //   ></Button>
      // ) : (
      //   <></>
      // ),
    });
  }, [navigation]);

  return (
    <>
      <EditNotes noteId={noteId} />
    </>
  );
};
