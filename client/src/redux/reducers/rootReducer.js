import { combineReducers } from 'redux';
import bagReducer from './bagReducer';

const rootReducer = combineReducers({
  bag: bagReducer,
});

export default rootReducer;
