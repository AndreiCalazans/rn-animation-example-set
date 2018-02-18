import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';

import { Container } from './common';

class ChangeColor extends Component {
  state = {
    valueToAnimate: 150,
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.colorAnimation();
  }

  colorAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: this.state.valueToAnimate,
      duration: 500,
    }).start();
  }

  toggleAnimation = () => {
    this.setState((prevState) => ({ valueToAnimate: prevState.valueToAnimate === 0 ? 150 : 0 }), () => {
      this.colorAnimation();
    })
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: [ 'rgb(200, 100, 300)', 'rgb(51, 250, 170)'],
    })
    const animatedStyle = {
      backgroundColor: interpolateColor,
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleAnimation}>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text>Toggle me</ Text>
          </ Animated.View> 
        </TouchableOpacity>
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

export default Container(ChangeColor);
