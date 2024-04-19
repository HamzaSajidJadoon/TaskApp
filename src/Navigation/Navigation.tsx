import React from 'react'
import { StyleSheet, Text, View , StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/Splash/Splash';
import Home from '../Screens/Home/Home';
import MotorsListings from '../Screens/MotorsListings/MotorsListings';
import CarDetails from '../Screens/CarDetails/CarDetails';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
 
    <NavigationContainer>
  <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the default header
          animation: 'slide_from_right', // Use a slide animation for screen transitions
        }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MotorsListings" component={MotorsListings} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default Navigation

