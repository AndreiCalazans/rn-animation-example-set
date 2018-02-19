import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Button,
} from 'react-native';

import { Container } from './common';

const { height } = Dimensions.get('window');

class Stagger extends Component {

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animationStart();
  }

  animationStart = () => {
    this.animatedValue1._value === 0 ? this.animateForward() : this.animateBackwards()
  }

  animateForward = () => {
    Animated.stagger(300, [
      Animated.timing(this.animatedValue1, {
        toValue: height,
        duration: 1500,
      }),
      Animated.timing(this.animatedValue2, {
        toValue: height,
        duration: 2000,
      }),
      Animated.timing(this.animatedValue3, {
        toValue: 300,
        duration: 1500,
      }),
    ]).start();
  }

  animateBackwards = () => {
    Animated.stagger(300, [
      Animated.timing(this.animatedValue1, {
        toValue: 0,
        duration: 1500,
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 0,
        duration: 2000,
      }),
      Animated.timing(this.animatedValue3, {
        toValue: 0,
        duration: 1500,
      }),
    ]).start();
  }

 render() {
    const animatedStyle1 = {
      height: this.animatedValue1,
    }

    const animatedStyle2 = {
      height: this.animatedValue2,
    }
    const animatedStyle3 = {
      height: this.animatedValue3,
    }

    return (
        <View style={styles.container}>
            <Button title='Toggle' onPress={this.animationStart} />
              <Animated.View style={[styles.button, animatedStyle1]}/>
              <Animated.View style={[styles.button, animatedStyle2]}/>
              <Animated.View style={[styles.button, animatedStyle3]}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container(Stagger);
