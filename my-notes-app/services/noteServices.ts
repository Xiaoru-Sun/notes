import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
  text: string;
  id: string;
};

export type NoteStore = {
  notes: Array<Note>;
};

const STORE_KEY = "NOTES_STORE";

export const getAllNotes = async () => {
  const storeItems = await AsyncStorage.getItem(STORE_KEY);
  if (storeItems) {
    return JSON.parse(storeItems) as NoteStore;
  }
  return { notes: [] };
};

export const getNoteById = async (id: string) => {
  const noteStore = await getAllNotes();
  const searchedNote = noteStore.notes.find((note) => note.id === id);
  return searchedNote;
};

export const saveNote = async (input: string) => {
  const noteStore = await getAllNotes();
  const updatedNoteStore = [
    ...noteStore.notes,
    { text: input, id: new Date() },
  ];
  await AsyncStorage.setItem(
    STORE_KEY,
    JSON.stringify({ notes: updatedNoteStore })
  );
};
