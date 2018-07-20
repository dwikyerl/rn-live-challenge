import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import Header from '@/components/Header';
import Board from '@/components/Board';

class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.boardContainer}>
          <Board board={this.props.board} />
        </View>
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
  boardContainer: {
    height: '100%',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => {
  return {
    board: state.game.board
  }
}

export default connect(mapStateToProps)(Game);