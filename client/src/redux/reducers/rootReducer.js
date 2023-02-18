import { combineReducers } from 'redux';
import { betsAndOddsReducer } from './betsAndOddsReducer';
import { bagReducer } from './bagReducer';
import { teamsReducer } from './teamsReducer';

export const rootReducer = combineReducers({
  teams: teamsReducer,
  betsAndOdds: betsAndOddsReducer,
  bag: bagReducer,
});
