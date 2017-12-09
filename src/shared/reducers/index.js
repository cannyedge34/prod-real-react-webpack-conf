import { combineReducers } from 'redux';

import blog from '../../app/blog/reducer';

import device from './deviceReducer';

const rootReducer = combineReducers({
  blog,
  device
});

export default rootReducer;
