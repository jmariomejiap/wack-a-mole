import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Hole from './hole';
import MoleAnimated from './moleAnimated';
import { moleMissed } from '../actions';

const styles = StyleSheet.create({
  containerMoleAndHole: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    width: 120,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9BF9C',
    borderRadius: 50,
    width: 110,
    position: 'relative',
  },
});

/* eslint-disable-next-line */
const MoleSection = ({ index, board, gameOn, dispatch }) => {
  const MoleIsActive = board[index];

  // points given only if user taps on Mole.
  const handleBadTap = () => {
    if (gameOn) {
      dispatch(moleMissed());
    }
  };

  return (
    <TouchableOpacity
      style={styles.containerMoleAndHole}
      onPress={handleBadTap}
    >
      <View style={styles.inner}>
        <Hole />
        {(gameOn && MoleIsActive) && <MoleAnimated /> }
      </View>
    </TouchableOpacity>
  );
};

MoleSection.propTypes = {
  index: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,
  gameOn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
  return {
    board: store.gameReducer.board,
    gameOn: store.gameReducer.gameOn,
  };
};

export default connect(mapStateToProps)(MoleSection);

