import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const GAME_TYPES = ['Skins', 'Wolf', 'Stroke Play'];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Choose Game Type</Text>
      {GAME_TYPES.map(type => (
        <Button
          key={type}
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('GameSetup', { gameType: type })}
        >
          {type}
        </Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  button: {
    marginVertical: 8,
    width: '80%',
  },
});
