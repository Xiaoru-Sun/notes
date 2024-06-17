import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNote = async () => {
  return AsyncStorage.getItem("note");
};

export const saveNote = async (input: string) => {
  await AsyncStorage.setItem("note", input);
};
