import { combineReducers } from 'redux';
import { HIT, MISSED, GAMEON, ACTIVATE_MOLE } from './actions';

const initialState = {
  board: [false, false, false, false, false, false, false, false, false],
  gameOn: false,
  score: 0,
};


const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAMEON:
      return {
        ...state,
        gameOn: !state.gameOn,
      };

    case HIT:
      return {
        ...state,
        score: state.score + 1,
      };

    case MISSED:
      return {
        ...state,
        score: state.score - 3,
      };
    case ACTIVATE_MOLE:
      return {
        ...state,
        board: state.board.map((value, index) => index === action.moleIndex),
      };

    default:
      return state;
  }
};


const rootReducer = combineReducers({ gameReducer });

export default rootReducer;
