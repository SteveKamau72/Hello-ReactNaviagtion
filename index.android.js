/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Hello extends Component {
  render() {
    return (
          <View style={styles.container}>
              <Text>Welcome Page</Text>
              <Button
                  onPress={this.onPress}
                  title="Go to next screen"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
      </View>
    );
  }
  onPress(){
    //navigate to screen 1
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hello', () => Hello);
