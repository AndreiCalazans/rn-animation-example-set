import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DrawerBtn = ({ toggleDrawer, hasMargin }) => 
  <TouchableOpacity style={styles.btn(hasMargin)} onPress={toggleDrawer}>
    <Text style={{ fontSize: 40, color: 'red' }}>=</Text>
  </ TouchableOpacity> 

const styles = {
  btn: (hasMargin) => ({
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: hasMargin ? 0 : 30,
    right: hasMargin ? 0 : 30,
  }),
}

export default DrawerBtn;
