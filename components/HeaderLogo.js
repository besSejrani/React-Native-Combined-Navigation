import React, { Component } from 'react';
import { Image, View } from 'react-native';

import ReactLogo from '../Images/react2.png';

export class HeaderLogo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={ReactLogo} style={{ width: 40, height: 40 }} />
      </View>
    );
  }
}
styles = {
  container: { justifyContent: 'center', flex: 1, alignItems: 'center' }
};

export default HeaderLogo;
