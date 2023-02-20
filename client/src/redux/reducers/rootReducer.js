import { combineReducers } from 'redux';
import bagReducer from './bagReducer';
import loadingModalReducer from './loadingModalReducer';

const rootReducer = combineReducers({
  bag: bagReducer,
  loadingModal: loadingModalReducer,
});

export default rootReducer;
