import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const pagina3screen = ({navigation}: Props) => {

  return (
      <View style={styles.globalMargin}>
          <Text  style={styles.title}>Pagina tres</Text>
          <Button
          title="Regresar"
          onPress={() => navigation.pop()}
          />
          <Button
          title="Home"
          onPress={() => navigation.popToTop()}
          />
      </View>
  );
};
