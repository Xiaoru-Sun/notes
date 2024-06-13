import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [input, setInput] = useState<string>("");
  const saveNote = async () => {
    await AsyncStorage.setItem("note", input);
    console.log("saved to asyncstorage");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
      ></TextInput>
      <Button
        title="save"
        onPress={() => {
          saveNote();
        }}
      ></Button>
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
  textInput: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: 200,
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});
