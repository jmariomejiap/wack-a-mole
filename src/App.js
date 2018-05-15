import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import HeaderSection from './components/headerSection/';
import Gameboard from './components/gameBoard/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BF9C',
  },
});


// Game component. renders the whole game.
export default () => (
  <View style={styles.container}>
    <HeaderSection />
    <View style={{ flex: 3 }}>
      <Gameboard />
    </View>
  </View>
);
