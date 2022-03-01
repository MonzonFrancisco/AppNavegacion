import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const pagina2screen = () => {

  const navigator = useNavigation<any>();

  return (
      <View style={styles.globalMargin}>
          <Text  style={styles.title}>Pagina dos</Text>
          <Button
            title="Ir a pagina 3"
            onPress={() => navigator.navigate('pagina3screen' as never)}
            />
      </View>
  );
};
