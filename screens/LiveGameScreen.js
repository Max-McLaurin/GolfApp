import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function LiveGameScreen({ route }) {
  const { gameType, players, bet } = route.params;
  const scores = players.map(p => ({ player: p, score: 0 }));

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>{gameType} Live</Text>
      <Text>Side Bet: ${bet || '0'}</Text>
      <FlatList
        data={scores}
        keyExtractor={item => item.player}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.player}</Text>
            <Text>{item.score}</Text>
          </View>
        )}
        style={styles.list}
      />
      <Text style={styles.note}>* Scores and bet calculations are placeholders.</Text>
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
  list: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  note: {
    marginTop: 24,
    fontStyle: 'italic',
  },
});
