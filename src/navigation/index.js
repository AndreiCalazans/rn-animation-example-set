import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Intro from '../components/Intro';
import ChangeColor from '../components/ChangeColor';
import OnDrag from '../components/OnDrag';
import Rotate from '../components/Rotate';
import Sequence from '../components/Sequence';
import Stagger from '../components/Stagger';

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
  Rotate: {
    screen: Rotate,
  },
  Sequence: {
    screen:Sequence,
  },
  Stagger: {
    screen: Stagger,
  },
})

export const Navigator = StackNavigator({
  Drawer: {
    screen: Drawer,
  },
},{
  headerMode: 'none',
})