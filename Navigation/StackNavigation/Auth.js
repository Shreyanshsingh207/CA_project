import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../component/splashScreen';
import IntroScreen from '../../component/IntroScreen';
import Login from '../../component/login';
import SignupScreen from '../../component/SignupScreen';
import ClientRegistration from '../../component/clientRegistration';
import Admin_Registation from '../../component/adminRegistation';




const Stack = createNativeStackNavigator();
const AppStack=()=> {
  return (
    <Stack.Navigator>
    
    <Stack.Screen name="SpashScreen" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Introduction" component={IntroScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login } options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: true }} />
    <Stack.Screen name="ClientSignup" component={ClientRegistration} options={{ headerShown: true }} />
    <Stack.Screen name="AdminSignup" component={Admin_Registation} options={{ headerShown: true }} />
    
    
  </Stack.Navigator>
   
  )
}

export default AppStack
