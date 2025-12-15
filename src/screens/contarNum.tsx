import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function ContadorNum() {
  const [resultado, setResultado] = useState<number | null>(0)
  console.log('Resultado:', resultado);

  useEffect(() => {
    setResultado(0);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-4 p-4">
        <Text className="text-3xl text-gray-700">Tela Contador + e - </Text>


        <Text className="text-3xl text-gray-700">{resultado ?? '...'}</Text>
         <BotaoCustomizado title="+" onPress={() => setResultado(prev => (prev !== null ? prev + 1 : 1))} />
        <BotaoCustomizado title="-" onPress={() => setResultado(prev => (prev !== null ? prev - 1 : -1))} />

       
      
      </View>

    </View>
  );
}
