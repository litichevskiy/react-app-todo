import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import storageApi from './storageApi';
import { SHOW_ALL_TODO } from './constants';

const initialState = {
  visibilityFilter: SHOW_ALL_TODO,
  editableTodo: null,
  todos: [],
  basketTodo: null
};

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => {
  return createStore( rootReducer, preloadedState, composeEnhancers() );
};

async function initStore() {
  const store = await storageApi.init( initialState );
  return configureStore( store );
}

export default initStore;