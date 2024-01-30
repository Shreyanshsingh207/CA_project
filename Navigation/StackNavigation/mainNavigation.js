import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigation from './HomeNavigation';
import AppStack from './Auth';



const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="AppStack" component={AppStack} options={{ headerShown: true }} />
    <Stack.Screen name="HomeNavigation" component={HomeNavigation} options={{ headerShown: true }} />
   
  </Stack.Navigator>
   
  )
}

export default MainNavigation