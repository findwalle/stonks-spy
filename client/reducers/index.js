import { combineReducers } from 'redux';
import reducers from './reducers';

export default combineReducers({
  markets: reducers,
});