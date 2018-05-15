/* eslint-disable global-require */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, AlertIOS } from 'react-native';
// import TimerCountdown from 'react-native-timer-countdown';
import { gameControl } from '../actions';


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 140,
    right: 10,
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


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 10,
      gameOver: false,
    };
  }

  /* eslint-disable-next-line */
  handleTimer = () => {
    const { minutes, seconds } = this.state;
    if (minutes === 0 && seconds === 0) {
      this.setState({ gameOver: true });
      clearInterval(this.intervalId);
      this.props.dispatch(gameControl());
      return;
    }
    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
    }
    if (seconds === 0 && minutes > 0) {
      this.setState({ minutes: 0, seconds: 60 });
    }
  }

  componentDidMount() {
    if (this.state.gameOver) {
      this.props.dispatch(gameControl());
      this.intervalId = setInterval(this.handleTimer, 1000);
    }

    // this.setState({ timer }, () => console.log('setint timer = ', timer));
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  render() {
    const { minutes, seconds, gameOver } = this.state;
    return (
      <View style={styles.container}>
        <Image style={{ width: 140 }} source={require('../../assets/gameBtn.png')} resizeMode="contain" />
        <Text style={styles.textScore}>{`${minutes}:${seconds}`}</Text>
        {gameOver && AlertIOS.alert('Game Over')}
      </View>
    );
  }
}

// const mapStateToProps = (store)
Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Timer);
