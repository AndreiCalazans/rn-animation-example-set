import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import { Container } from './common';

class Rotate extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 3000,
    }).start()
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation },
      ],
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.button, animatedStyle]}>
              <Text> Spinner </ Text>
            </ Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container(Rotate);
