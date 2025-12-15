
import { StatusBar } from 'expo-status-bar';
import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ParImpar } from '@/screens/parImpa';
import { Media } from '@/screens/media';
import { ContadorNum } from '@/screens/contarNum';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        {/* <LoginScreen /> */}
         {/* <Soma /> */}
         {/*<ParImpar />*/}
         {/*<Media />*/}
         <ContadorNum />

      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
