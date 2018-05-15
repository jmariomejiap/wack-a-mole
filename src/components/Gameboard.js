import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MoleSection from './moleSection';
import { generateRandomMole } from '../actions';

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

class GameBoard extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(this.activateMole, 1500);
  }

  activateMole = () => {
    const { dispatch, gameOn } = this.props;

    if (gameOn) {
      dispatch(generateRandomMole());
      return;
    }
    clearInterval(this.intervalId);
  }


  render() {
    return (
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
  }
}

const mapStateToProps = (store) => {
  return {
    gameOn: store.gameReducer.gameOn,
  };
};

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gameOn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(GameBoard);
