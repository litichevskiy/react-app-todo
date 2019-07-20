import { combineReducers } from 'redux';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SHOW_ALL_TODO,
  SET_VISIBILITY_FILTER,
  UPDATE_TODO,
  UPDATE_STATUS_TODO } from '../constants';

const todos = ( state = [], action ) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.payload.id,
          value: action.payload.value,
          completed: false,
          priority: action.payload.priority,
          date: action.payload.date,
        },
        ...state,
      ]
    case DELETE_TODO:
      return state.filter( todo  => todo.id !== action.payload );
    case UPDATE_TODO:
      return state.map( item => {
        if( item.id === action.payload.id ) {
          return {... action.payload};
        }
        return item;
      });
      case UPDATE_STATUS_TODO:
      return state.map( item => {
        if( item.id === action.payload.id ) {
          return {...item, completed: action.payload.completed};
        }
        return item;
      });
    default:
      return state;
  }
};

const visibilityFilter = ( state = SHOW_ALL_TODO, action ) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state;
  }
};

const editableTodo = ( state = null, action ) => {
  switch (action.type) {
    case EDIT_TODO:
      return action.payload
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  visibilityFilter,
  todos,
  editableTodo
});

export default rootReducer;