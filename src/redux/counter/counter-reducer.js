import { combineReducers } from 'redux';
import { increment, decrement } from './counter-actions';
import { createReducer } from '@reduxjs/toolkit';

const value = createReducer(10, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const step = (state = 5, _) => state;

export default combineReducers({ value, step });
