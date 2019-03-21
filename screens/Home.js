import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Ionicons
          style={{ paddingLeft: 20, color: 'white' }}
          name="md-menu"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="go to about"
          onPress={() =>
            this.props.navigation.navigate('About', { userId: 'bes' })
          }
        />
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

export default Home;
