import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from './Home';
import About from './About';

import HeaderLogo from '../components/HeaderLogo';
import SideMenu from '../components/SideMenu';

const BottomTab = createBottomTabNavigator({
  Home: { screen: Home },
  About: { screen: About }
});

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomTab,
      navigationOptions: ({ navigation }) => ({
        headerTitle: HeaderLogo
      })
    },
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        headerTitle: HeaderLogo
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'powderblue'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: '900',
        color: 'white'
      }
    }
    // headerMode: 'none'
  }
);

const sideDrawer = createDrawerNavigator(
  {
    project: { screen: stackNavigator }
  },
  {
    drawerWidth: 300,
    contentComponent: SideMenu
  }
);

const AppContainer = createAppContainer(sideDrawer);

export default AppContainer;
