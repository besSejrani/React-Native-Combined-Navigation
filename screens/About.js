import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export class About extends Component {
  render() {
    const userId = this.props.navigation.getParam('userId');

    return (
      <View style={styles.container}>
        <Button
          title="go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>{userId}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default About;
