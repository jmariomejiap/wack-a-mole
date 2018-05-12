/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { moleWacked, moleMissed } from '../actions';

const styles = StyleSheet.create({
  holeImage: {
    height: 80,
    width: 120,
  },
  mole: {
    zIndex: 1,
    position: 'absolute',
    // backgroundColor: 'red',
    bottom: -8,
    right: 12,
    left: -12,
    borderRadius: 70,
    height: 150,
    width: 150,
  },
});

const MoleInHole = ({ dispatch, board, boardIndex }) => {
  const handleTap = () => {
    if (board[boardIndex]) {
      console.log('true moleWached');
      return dispatch(moleWacked());
    }
    console.log('nooooooo ', board[boardIndex]);
    return dispatch(moleMissed());
  };

  return (
    <TouchableOpacity
      style={{ position: 'relative' }}
      onPress={handleTap}
    >
      {board[boardIndex] && <Image style={styles.mole} source={require('../../assets/mole.png')} resizeMode="contain" /> }
      <Image style={styles.holeImage} source={require('../../assets/hole.png')} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const mapStateToProps = (store) => {
  return {
    board: store.gameReducer.board,
  };
};

MoleInHole.propTypes = {
  dispatch: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
  boardIndex: PropTypes.isRequired,
};

export default connect(mapStateToProps)(MoleInHole);
