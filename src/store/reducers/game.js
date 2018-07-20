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
    case actionTypes.START_GAME:
      return state;
    default:
      return state;
  }
}

export default reducer;