import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Container, WingTransition } from './common';


class Wing extends React.Component {
  state = {
    disabled: false,
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text>Animation</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState(prevState => ({ disabled: !prevState.disabled }));
            setTimeout(() => this.setState(prevState => ({ disabled: !prevState.disabled })), 3000);
          }}
          style={{ alignItems: 'center' }}
        >
          <Text>Press me to toggle</Text>
        </TouchableOpacity>
        <WingTransition loadingMessage="Loading" isLoading={this.state.disabled} />
        <View />
      </View>
    );
  }
}

export default Container(Wing, false);