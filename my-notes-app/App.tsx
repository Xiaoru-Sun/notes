import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { Home } from "./components/Home";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateNotes } from "./components/CreateNotes";
import { RootStackParamsList } from "./types";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4500e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              title: "Home",
              headerRight: () => (
                <Button
                  title="New Note"
                  onPress={() => navigation.navigate("Notes")}
                ></Button>
              ),
            };
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Notes"
          component={CreateNotes}
          options={{
            title: "Edit Note",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
