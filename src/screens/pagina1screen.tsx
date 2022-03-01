import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any>{}

export const pagina1screen = ( {navigation}: Props ) => {

  return (
     <View style={styles.globalMargin}>
         <Text style={styles.title}>Pagina uno</Text>
          <Button
            title="Ir a pagina 2"
            onPress={() => navigation.navigate('pagina2screen') }
            />

            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 30,
              marginTop: 10,
              fontWeight: 'bold',
            }}
            >Navegar con argumentos</Text>

            <View style={{flexDirection: 'row'}}>

                <TouchableOpacity
                style={{
                  ...styles.botonGrande,
                  backgroundColor: '#5856D6',
                }}
                onPress={() => navigation.navigate('PersonaScreen',{
                  id: 1,
                  nombre: 'Francisco',
                })}
                >
                  <Text style={styles.botonGrandeTexto}>Francisco</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.botonGrande}
                onPress={() => navigation.navigate('PersonaScreen',{
                  id: 2,
                  nombre: 'Luis',
                })}
                >
                  <Text style={styles.botonGrandeTexto}>Luis</Text>
                </TouchableOpacity>

            </View>

     </View>
  );
};
