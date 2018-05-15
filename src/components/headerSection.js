/* eslint-disable global-require */
import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import TimerBox from './timerBox';
import ScoreBox from './scoreBox';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width,
    backgroundColor: 'lightgrey',
  },
  imageBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
});


const HeaderSection = () => (
  <View style={styles.container}>
    <ScoreBox />
    <TimerBox />
    <Image
      style={styles.imageBackground}
      source={require('../../assets/game-screen-top.png')}
    />
  </View>
);


export default HeaderSection;

// original file had PNG extension, change to png to fix crashing.
