import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DrawerBtn = ({ toggleDrawer }) => 
  <TouchableOpacity style={styles.btn} onPress={toggleDrawer}>
    <Text style={{ fontSize: 40, color: 'red' }}>=</Text>
  </ TouchableOpacity> 

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
})

export default DrawerBtn;
