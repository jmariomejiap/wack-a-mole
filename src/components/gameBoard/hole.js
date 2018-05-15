/* eslint-disable global-require */
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  containerAnimation: {
    zIndex: 0,
    position: 'absolute',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  holeImage: {
    height: 110,
    width: 110,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
});


export default () => (
  <View style={styles.containerAnimation}>
    <Image style={styles.holeImage} source={require('../../../assets/hole.png')} resizeMode="contain" />
  </View>
);
