import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { AddNotes } from "./components/AddNotes";
import { Home } from "./components/Home";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [addNotesVisible, setAddNotesVisible] = useState<boolean>(false);
  const saveNote = async (input: string) => {
    await AsyncStorage.setItem("note", input);
    setAddNotesVisible(false);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {addNotesVisible ? (
          <AddNotes saveNote={saveNote}></AddNotes>
        ) : (
          <Home setAddNotesVisible={setAddNotesVisible}></Home>
        )}
      </View>
    </NavigationContainer>
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
