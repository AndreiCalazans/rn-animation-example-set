// HOC for views.
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { DrawerBtn } from '../common';

const Container = (Component, hasMargin = true) => class extends React.Component {
  render() {
    return (
    <View style={styles.container(hasMargin)}>
      <Component {...this.props}/>
      <DrawerBtn hasMargin={hasMargin} toggleDrawer={() => this.props.navigation.navigate('DrawerOpen')} />
     </View> 
    )
  }
} 

const styles = {
  container: (hasMargin) => ({
    margin: hasMargin ? 30 : 0,
    flex: 1,
  }),
};

export default Container;
