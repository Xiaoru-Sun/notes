import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { AddNotes } from "./components/AddNotes";
import { useState } from "react";

export default function App() {
  const [addNotesVisible, setAddNotesVisible] = useState<boolean>(false);
  const saveNote = async (input: string) => {
    await AsyncStorage.setItem("note", input);
    setAddNotesVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {addNotesVisible ? (
        <AddNotes saveNote={saveNote}></AddNotes>
      ) : (
        <>
          <Text>Home</Text>
          <Button
            title="New Note"
            onPress={() => setAddNotesVisible(true)}
          ></Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
