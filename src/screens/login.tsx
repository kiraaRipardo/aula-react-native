import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/InputCustomizado';
import { Text,  View } from 'react-native';

export function LoginScreen() { 
    return ( 
    <View className = "flex-1 items-center justify-center bg-white"> 
       <InputCustomizado placeholder="login"/>
       <InputCustomizado placeholder="senha"/>
       <BotaoCustomizado title="Entrar"/>
    </View>
); 
}
