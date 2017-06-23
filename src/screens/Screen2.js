//dumm text for naviagtion
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen 1',
  };
  render() {
     const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
        <Button
            onPress={onPress}
            title="Go to next screen"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }

  onPress(){
    //go to screen 3
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
  }
});