import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import Header from '@/components/Header';

export default class Home extends Component {
  startNewGame = () => {
    this.props.navigation.navigate('Game');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.menuContainer}>
          <TouchableHighlight onPress={this.startNewGame}>
            <View style={styles.menuItem}>
              <Text>New Game</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#4db6ac',
    flex: 1
  },
  menuContainer: {
    flex: 1,
    alignItems: 'center'
  }
});