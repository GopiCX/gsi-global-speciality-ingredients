import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../Reducers';

const logger = createLogger();

const middelware = applyMiddleware(logger, thunk);

export default createStore(reducer, middelware);
