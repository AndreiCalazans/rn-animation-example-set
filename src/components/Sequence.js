import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
} from 'react-native';
import { Container } from './common';

class Sequence extends Component {

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
    
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.animatedValue1, {
        toValue: 150,
        duration: 1000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3,
      }),
      Animated.timing(this.animatedValue1, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: .5,
      }),
    ]).start();

  }
  render() {
    const animatedStyle = {
      transform: [
        { translateY: this.animatedValue1 },
        { scale: this.animatedValue2 },
      ],
    }
    return (
        <View style={styles.container}>
            <Button title='repeat' onPress={this.startAnimation} />
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

export default Container(Sequence);
