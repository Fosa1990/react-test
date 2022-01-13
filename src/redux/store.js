import { configureStore } from '@reduxjs/toolkit';
import counter from './counter/counter-reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: { counter },
  middleware: [logger],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
