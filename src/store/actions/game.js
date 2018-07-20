import * as actionTypes from './actionTypes';

export const startGame = () => {
  return {
    type: actionTypes.START_GAME
  }
}

export const selectItem = (index, value) => {
  return {
    type: actionTypes.SELECT_ITEM,
    index,
    value
  }
}