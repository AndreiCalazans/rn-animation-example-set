import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
} from 'react-native';

import { Container } from './common';

class OnDrag extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this._value = { x: 0, y: 0 }
    this.animatedValue.addListener((value) => this._value = value);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        })
        this.animatedValue.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValue.x, dy: this.animatedValue.y },
      ]),
      onPanResponderRelease: () => {
        
      },
    })
  }

  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform(),
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.button, animatedStyle]} { ...this.panResponder.panHandlers}>
          <Text> Drag me </ Text>
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

export default Container(OnDrag);
