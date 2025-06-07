import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function GameSetupScreen({ route, navigation }) {
  const { gameType } = route.params;
  const [players, setPlayers] = useState(['Alice', 'Bob']);
  const [bet, setBet] = useState('');

  const startGame = () => {
    navigation.navigate('LiveGame', { gameType, players, bet });
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>{gameType} Setup</Text>
      <Text>Players:</Text>
      {players.map(p => (
        <Text key={p}>{p}</Text>
      ))}
      <TextInput
        label="Side Bet ($)"
        value={bet}
        onChangeText={setBet}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={startGame} style={styles.button}>
        Start Game
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginTop: 24,
  },
});
