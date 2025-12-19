import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

export function ListaNumScreens() {
  const [valor, setValor] = useState('');
  const [lista, setLista] = useState<number[]>([]);

  function adicionarNumero() {
    const numero = Number(valor);
    if (isNaN(numero)) return;

    setLista([...lista, numero]);
    setValor('');
  }
   function LimparLista() {
    setLista([]);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center gap-5 p-5">
        <Text className="text-3xl text-gray-700">
          Lista de Números
        </Text>

        <InputCustomizado
          placeholder="Digite um número"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />

        <BotaoCustomizado
          title="Adicionar à Lista"
          onPress={adicionarNumero}
        />
        <BotaoCustomizado 
        title="Limpar Lista" 
        onPress={LimparLista} 
        />
        
      </View>

      <ScrollView className="w-full px-4">
        {lista.map((numero, index) => (
          <Text key={index} className="text-lg text-gray-700">
            {numero} → {numero % 2 === 0 ? 'Par' : 'Ímpar'}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
