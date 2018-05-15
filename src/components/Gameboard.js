import React from 'react';
import { View, StyleSheet } from 'react-native';
import MoleSection from './moleSection';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  containerDouble: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerSingle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const GameBoard = () => (
  <View style={styles.mainContainer}>
    <View style={styles.containerDouble}>
      <MoleSection index={0} />
      <MoleSection index={1} />
    </View>

    <View style={styles.containerSingle}>
      <MoleSection index={2} />
    </View>

    <View style={styles.containerDouble}>
      <MoleSection index={3} />
      <MoleSection index={4} />
    </View>

    <View style={styles.containerSingle}>
      <MoleSection index={5} />
    </View>

    <View style={styles.containerDouble}>
      <MoleSection index={6} />
      <MoleSection index={7} />
    </View>

    <View style={styles.containerSingle}>
      <MoleSection index={8} />
    </View>
  </View>
);

export default GameBoard;
