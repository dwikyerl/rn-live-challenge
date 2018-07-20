import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tic Tac Toe</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#4db6ac',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
});