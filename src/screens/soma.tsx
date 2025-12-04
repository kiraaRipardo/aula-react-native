import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/InputCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function Soma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState<number | null>(0);

  console.log('Valor 1:', valor1);

  console.log('Valor 2:', valor2);

  console.log('Resultado:', resultado);

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2]);

  function Somarvalores() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    setResultado(num1 + num2);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-4 p-4">
        <Text className="text-3xl text-gray-700">Soma de Dois Valores</Text>

        <InputCustomizado
          placeholder="Valor 01"
          keyboardType="decimal-pad"
          onChangeText={(text) => setValor1(text)}
        />
        <InputCustomizado
          placeholder="Valor 02"
          keyboardType="decimal-pad"
          onChangeText={(text) => setValor2(text)}
        />
        <BotaoCustomizado title="Somar os valores" onPress={Somarvalores} />
        <Text>Resultado da Soma: {resultado ?? '...'}</Text>

      </View>

    </View>
  );
}
