import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import * as api from '../config';

const logger = (store) => (next) => (action) => {
  console.info('ACTION:', action);
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk.withExtraArgument({ client: axios, api })),
);
