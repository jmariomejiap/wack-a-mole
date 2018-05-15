/* eslint-disable global-require */
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  scoreContainer: {
    position: 'absolute',
    width: 140,
    left: 10,
    top: 20,
    zIndex: 1,
  },
  textScore: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 25,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(71, 54, 25)',
  },
});

const ScoreBox = ({ score }) => (
  <View style={styles.scoreContainer}>
    <Image style={{ width: 140 }} source={require('../../assets/gameBtn.png')} resizeMode="contain" />
    <Text style={styles.textScore}>{score}</Text>
  </View>
);


const mapStateToProps = (store) => {
  return {
    score: store.gameReducer.score,
  };
};


ScoreBox.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ScoreBox);
