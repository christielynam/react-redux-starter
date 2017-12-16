import { combineReducers } from 'redux';
import { isLoading, hasErrored } from './sample-reducer';

const rootReducer = combineReducers({
  isLoading,
  hasErrored
})

export default rootReducer;
