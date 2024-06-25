import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
  text: string;
  id: string | undefined;
};

export type NoteStore = {
  notes: Array<Note>;
};

const STORE_KEY = "NOTES_STORE";

export const getAllNotes = async () => {
  const storeItems = await AsyncStorage.getItem(STORE_KEY);
  if (storeItems) {
    return JSON.parse(storeItems);
  }
  return { notes: [] };
};

export const getNoteById = async (id: string) => {
  const noteStore = await getAllNotes();
  const searchedNote = noteStore.notes.find((note: Note) => note.id === id);
  return searchedNote;
};

export const saveNote = async (input: string, noteId: string | undefined) => {
  const noteStore = await getAllNotes();
  if (noteId) {
    const index = noteStore.notes.findIndex((note: Note) => note.id === noteId);
    noteStore.notes.splice(index, 1, { text: input, id: noteId });
  } else {
    noteStore.notes.push({ text: input, id: Date.now().toString() });
  }
  await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
};
