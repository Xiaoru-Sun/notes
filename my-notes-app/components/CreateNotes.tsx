import React from "react";
import { EditNotes } from "./EditNotes";
import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../types";

export const CreateNotes = () => {
  const route = useRoute<EditScreenRouteProp>();
  const noteId = route.params.noteId;
  return (
    <>
      <EditNotes noteId={noteId} />
    </>
  );
};
