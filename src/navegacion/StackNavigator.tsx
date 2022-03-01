import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { pagina1screen } from '../screens/pagina1screen';
import { pagina2screen } from '../screens/pagina2screen';
import { pagina3screen } from '../screens/pagina3screen';
import { PersonaScreen } from '../screens/PersonaScreen';



export type RootStackParams = {
  pagina1screen: undefined,
  pagina2screen: undefined,
  pagina3screen: undefined,
  PersonaScreen: {id: number, nombre: string},
}

const Stack = createStackNavigator<RootStackParams>();

 export const StackNavigator = () => {
  return (
    <Stack.Navigator
    //initialRouteName='pagina2screen' puede iniciar desde la pagina que asignemos
    screenOptions={
      {
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle:{
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="pagina1screen" options={{title:'Página uno'}} component={pagina1screen} />
      <Stack.Screen name="pagina2screen" options={{title: 'Página dos'}} component={pagina2screen} />
      <Stack.Screen name="pagina3screen" options={{title: 'Página tres'}} component={pagina3screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
