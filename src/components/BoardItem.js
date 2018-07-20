import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

export default class BoardItem extends Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={styles.boardItem}>
          <Text style={styles.itemText}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  boardItem: {
    margin: 5,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#ccc',
    height: 100,
    width: 100,
    borderRadius: 100
  },
  itemText: {
    fontSize: 30
  }
});