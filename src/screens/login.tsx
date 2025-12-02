import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/InputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [Login, setLogin, ] = useState('');
  const [Senha, setSenha] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
    <View className="w-full items-center justify-center gap-5 p-5">
    <Text className="text-3xl ">Login do App</Text>
    
        <InputCustomizado placeholder="login" onChangeText= {(text) => {setLogin(text)}}/>
        <InputCustomizado placeholder="senha" secureTextEntry={true} onChangeText= {(text) => {setSenha(text)}}/>

        <BotaoCustomizado title="Entrar" onPress={() => console.log("login", Login, "senha", Senha)} />

        <Text className=" text-blue-400"> Esqueceu a senha? </Text>
      </View>
    </View>
  );
}

