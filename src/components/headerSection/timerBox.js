/* eslint-disable global-require */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, AlertIOS } from 'react-native';
import { gameControl } from '../../actions';


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
      minutes: 1,
      seconds: 59,
      gameOver: false,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.handleTimer, 1000);
    this.props.dispatch(gameControl());
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  handleTimer = () => {
    const { dispatch } = this.props;
    const { minutes, seconds } = this.state;

    if (minutes === 0 && seconds === 0) {
      this.setState({ gameOver: true });
      clearInterval(this.intervalId);
      dispatch(gameControl());
      return;
    }
    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
    }
    if (seconds === 0 && minutes > 0) {
      this.setState({ minutes: 0, seconds: 60 });
    }
  }

  render() {
    const { minutes, seconds, gameOver } = this.state;
    return (
      <View style={styles.container}>
        <Image style={{ width: 140 }} source={require('../../../assets/gameBtn.png')} resizeMode="contain" />
        <Text style={styles.textScore}>{`${minutes}:${seconds}`}</Text>
        {gameOver && AlertIOS.alert('Game Over')}
      </View>
    );
  }
}


Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Timer);
