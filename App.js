import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Home from '@/screens/Home/Home';
import Game from '@/screens/Game/Game';
import End from '@/screens/End/End';

const RootStack = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Game: {
    screen: Game
  },
  End: {
    screen: End
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#dd2c00',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default class App extends Component {
  render() {
    return <RootStack />;
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
