import { StatusBar } from 'expo-status-bar';
import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ListaScreens } from '@/screens/lista';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Soma" component={Soma} />
            <Stack.Screen name="Lista" component={ListaScreens} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
