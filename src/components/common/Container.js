// HOC for views.
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { DrawerBtn } from '../common';

const Container = (Component) => class extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Component {...this.props}/>
      <DrawerBtn toggleDrawer={() => this.props.navigation.navigate('DrawerOpen')} />
     </View> 
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
  },
})

export default Container;
