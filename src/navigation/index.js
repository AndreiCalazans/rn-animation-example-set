import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Intro from '../components/Intro';
import ChangeColor from '../components/ChangeColor';
import OnDrag from '../components/OnDrag';

const Drawer = DrawerNavigator({
  Home: {
    screen: Intro,
  }, 
  ChangeColor: {
    screen: ChangeColor,
  },
  OnDrag: {
    screen: OnDrag,
  },
})

export const Navigator = StackNavigator({
  Drawer: {
    screen: Drawer,
  },
},{
  headerMode: 'none',
})