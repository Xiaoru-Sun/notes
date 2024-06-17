import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Home: undefined;
  Notes: undefined;
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamsList>;
