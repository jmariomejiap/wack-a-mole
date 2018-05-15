import { combineReducers } from 'redux';
import { HIT, MISSED, GAMEON } from './actions';

const initialState = {
  board: [false, true, false, false, true, false, false, false, false],
  gameOn: true,
  score: 0,
  time: '2:00',
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

    default:
      return state;
  }
};


const rootReducer = combineReducers({ gameReducer });

export default rootReducer;
