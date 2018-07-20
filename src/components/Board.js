import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import BoardItem from '@/components/BoardItem';

class Board extends Component {
  render() {
    const boardItems = this.props.board.map((line, lineIndex) => (
      <View key={lineIndex} style={styles.line}>
        { line.map((item, itemIndex) => <BoardItem text={item} key={itemIndex}/> )}
      </View>
      )
    );

    return (
      <View style={styles.board}>
        { boardItems }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  board: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue'
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Board;