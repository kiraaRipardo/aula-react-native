import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/InputCustomizado';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';

export function ListaScreens() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<String[]>([]);

  console.log('item:', item);
  console.log('lista:', lista);

  function AdicionarLista() {
    setLista([...lista, item]);
  }

  function LimparLista() {
    setLista([]);
  }

  return (
    <View className="flex-1 items-center ">
      <View className="w-full items-center gap-4 p-4">
        <Text className="text-3xl text-gray-700">lista</Text>

        <InputCustomizado placeholder="Item da Lista" onChangeText={(text) => setItem(text)} />
        <BotaoCustomizado title="Limpar Lista" onPress={LimparLista} />
        <BotaoCustomizado title="Adicionar Lista" onPress={AdicionarLista} />
        <Text>Itens da Lista: {lista ?? '...'}</Text>
      </View>

      <ScrollView className="mt-4 w-full">
        {lista.map((item, index) => (
          <Text key={index} className="text-gray-600">
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
