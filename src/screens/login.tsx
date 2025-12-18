import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { ProfileScreenNavigationProp } from '@/interface/roolPages';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [Login, setLogin] = useState('');
  const [Senha, setSenha] = useState('');

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  function logar() {
    console.log('login', Login, 'senha', Senha);
    navigation.navigate('soma');
  }

  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl text-gray-700">Login do App</Text>

        <InputCustomizado
          placeholder="login"
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputCustomizado
          placeholder="senha"
          secureTextEntry={true}
          onChangeText={(text) => {
            setSenha(text);
          }}
        />
        <BotaoCustomizado title="Entrar" onPress={logar} />
      </View>

      <View className="flex-row gap-5">
        <Text className="text-lg text-blue-400"> Cadastre-se </Text>
        <Text> | </Text>
        <Text className=" text-lg text-blue-400"> Esqueceu a senha? </Text>
      </View>
    </View>
  );
}
