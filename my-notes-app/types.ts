import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Home: undefined;
  Notes: { noteId: string | undefined };
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamsList>;

export type EditScreenRouteProp = RouteProp<RootStackParamsList, "Notes">;
