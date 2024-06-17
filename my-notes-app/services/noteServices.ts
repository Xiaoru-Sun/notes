import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNote = async () => {
  return AsyncStorage.getItem("note");
};
