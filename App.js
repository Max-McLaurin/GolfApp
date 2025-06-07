import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameSetupScreen from './screens/GameSetupScreen';
import LiveGameScreen from './screens/LiveGameScreen';
import { signIn } from './config/firebase';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Sign in anonymously for demo purposes
    signIn().catch(err => console.log('Auth Error', err));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameSetup" component={GameSetupScreen} options={{ title: 'Game Setup' }} />
        <Stack.Screen name="LiveGame" component={LiveGameScreen} options={{ title: 'Live Game' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
