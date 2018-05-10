import { combineReducers } from 'redux';
import { HIT, MISSED } from './actions';

const initialState = {
  points: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIT:
      return {
        ...state,
        points: state.points + 1,
      };

    case MISSED:
      return {
        ...state,
        points: state.points - 3,
      };

    default:
      return state;
  }
};


const rootReducer = combineReducers({ gameReducer });

export default rootReducer;
