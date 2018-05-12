import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import HeaderSection from './components/headerSection';
import Gameboard from './components/Gameboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BF9C',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// eslint-disable-next-line
export default class Game extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderSection />
        <View style={{ flex: 3 }}>
          <Gameboard />
        </View>
      </View>
    );
  }
}
