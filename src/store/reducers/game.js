import * as actionTypes from './../actions/actionTypes';

const initalState = {
  board: [
    ['', '', '',],
    ['', '', '',],
    ['', '', '',],
  ]
};

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case actionTypes.SELECT_ITEM:
      const updatedBoard = [...state.board];
      if (updatedBoard[action.index.x][action.index.y] === '') {
        updatedBoard[action.index.x][action.index.y] = action.value;
      }
      return {
        ...state,
        board: updatedBoard
      };
    default:
      return state;
  }
}

export default reducer;