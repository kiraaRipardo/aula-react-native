import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  login: undefined;
  soma: undefined;
  lista: undefined;
  listanum: undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList

>;