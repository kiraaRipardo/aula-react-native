import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/InputCustomizado';
import { Text,  View } from 'react-native';

export function LoginScreen() { 
    return ( 
    <View className = "flex-1 items-center justify-center bg-gray-200"> 
    <View className='w-full p-5 gap-5 items-center justify-center'>
    <Text className='text-3xl '>Login do App</Text>

        <InputCustomizado placeholder="login"/>
        <InputCustomizado placeholder="senha"/>
        <BotaoCustomizado title="Entrar"/>
        <Text className=' text-blue-400'> Esqueceu a senha? </Text>
    </View>
    </View>
); 
}
