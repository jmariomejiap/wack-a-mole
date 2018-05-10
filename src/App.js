import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderSection from './components/headerSection';

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
export default class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderSection />
        <View style={{ flex: 3 }}>
          <Text style={styles.welcome}>
            Welcome to WACK IT!
          </Text>
          <Text style={styles.instructions}>
            WACK A MOLE
          </Text>
        </View>
      </View>
    );
  }
}
