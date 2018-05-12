/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MoleInHole from './moleInHole';

const styles = StyleSheet.create({
  containerDouble: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerSingle: {
    alignItems: 'center',
  },
});

const GameBoard = () => (
  <View style={{ flex: 1, paddingTop: 10 }}>
    <View style={styles.containerDouble}>
      <MoleInHole boardIndex={0} />
      <MoleInHole boardIndex={1} />
    </View>

    <View style={styles.containerSingle}>
      <MoleInHole boardIndex={2} />
    </View>

    <View style={styles.containerDouble}>
      <MoleInHole boardIndex={3} />
      <MoleInHole boardIndex={4} />
    </View>

    <View style={styles.containerSingle}>
      <MoleInHole boardIndex={5} />
    </View>

    <View style={styles.containerDouble}>
      <MoleInHole boardIndex={6} />
      <MoleInHole boardIndex={7} />
    </View>

    <View style={styles.containerSingle}>
      <MoleInHole boardIndex={8} />
    </View>
  </View>
);

export default GameBoard;
