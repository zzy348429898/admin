import { combineReducers } from 'redux';
import admin, { initialStateItf } from './admin/index';

const rootReducer = combineReducers({admin});

export interface State{
  admin: initialStateItf
}

export default rootReducer;