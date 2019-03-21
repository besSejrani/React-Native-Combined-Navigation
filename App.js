import React from 'react';
import { Text, View } from 'react-native';
import AppContainer from './screens/AppNavigator';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
