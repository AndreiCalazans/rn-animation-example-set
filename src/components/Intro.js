// @flow

import * as React from 'react';
import { Text, View } from 'react-native';

import { Container } from './common';

class Intro extends React.Component<any> {
  render() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>A set of react-native animations to better understand RNs Animated API.</Text>
    </View>
    )
  }
}

export default Container(Intro);
