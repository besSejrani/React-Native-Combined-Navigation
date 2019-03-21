import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import { NavigationActions } from 'react-navigation';

import ReactLogo from '../Images/react2.png';

export class SideMenu extends Component {
  navigation = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });

    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navImageContainer}>
              <Image source={ReactLogo} style={styles.image} />
            </View>

            <View>
              <Text
                style={styles.sectionHeadingStyle}
                onPress={this.navigation('Home')}
              >
                Section 1
              </Text>
            </View>

            <View style={styles.navSection}>
              <Text style={styles.navItem} onPress={this.navigation('About')}>
                Section 2
              </Text>
            </View>

            <View>
              <Text
                style={styles.sectionHeadingStyle}
                onPress={this.navigation('Home')}
              >
                Section 3
              </Text>
            </View>

            <View style={styles.navSection}>
              <Text style={styles.navItem} onPress={this.navigation('About')}>
                Section 4
              </Text>
            </View>

            <View>
              <Text
                style={styles.sectionHeadingStyle}
                onPress={this.navigation('Home')}
              >
                Section 5
              </Text>
            </View>

            <View style={styles.navSection}>
              <Text style={styles.navItem} onPress={this.navigation('About')}>
                Section 6
              </Text>
            </View>

            <View>
              <Text
                style={styles.sectionHeadingStyle}
                onPress={this.navigation('Home')}
              >
                Section 7
              </Text>
            </View>

            <View style={styles.navSection}>
              <Text style={styles.navItem} onPress={this.navigation('About')}>
                Section 8
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text>Copyright</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40
  },
  navImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  image: {
    height: 50,
    width: 50
  },
  sectionHeadingStyle: {
    color: '#fff',
    backgroundColor: '#04b6ff',
    padding: 10
  },
  navSection: {
    backgroundColor: '#2e2e2e'
  },
  navItem: {
    color: 'white',
    padding: 10
  },
  footer: {
    padding: 20
  }
};

export default SideMenu;
