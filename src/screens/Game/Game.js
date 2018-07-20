import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import * as actionCreators from './../../store/actions';

import Header from '@/components/Header';
import Board from '@/components/Board';

class Game extends Component {
  state = {
    turn: 1,
    winner: null,
    player1: [],
    player2: [],
    combinations: [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
  }

  startGame = () => {

  }

  itemPressHandler = (index) => {
    let value = '';
    let combination = (index.x * 3) + index.y + 1;
    if (this.state.turn === 1) {
      value = 'O'
    } else {
      value = 'X'
    }

    this.props.onSelectItem(index, value);
    
    this.setState(prevState => {
      return {
        [`player${this.state.turn}`]: [...prevState[`player${this.state.turn}`], combination]
      }
    }, () => {
      this.checkGameState()
    });

  }

  checkWin = (player) => {
    // for (let i = 0; i < this.state.combinations.length; i += 1) {
    //   let win = false
    //   for (let j = 0; j < this.startGame.combinations[i].length; j += 1){
    //     if (player.includes(this.state.combinations[i][j])) {
    //       win = true;
    //     } else {
    //       win = false;
    //     }
    //   }
    //   if (win) return true
    // }
    // return false;
    return false;
  }

  checkGameState = () => {
    let next;
    let player = this.state[`player${this.state.turn}`];
    console.log(player);
    if (this.state.turn === 1) {
      next = 2;
    } else {
      next = 1
    }

    const win = this.checkWin(player);

    console.log(player, win);

    this.setState({
      turn: next
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.boardContainer}>
          <Board board={this.props.board} onItemPressed={this.itemPressHandler}/>
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

const mapDispatchToProps = dispatch => {
  return {
    onSelectItem: (index, value) => dispatch(actionCreators.selectItem(index, value)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);