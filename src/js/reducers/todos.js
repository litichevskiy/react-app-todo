import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  UPDATE_STATUS_TODO,
  RESTORE_TODO } from '../constants';

const todos = ( state = [], { type, payload } ) => {
  switch ( type ) {
    case ADD_TODO:
      const { id, value, priority, date } = payload;
      return [
        { id: id, value: value, completed: false, priority: priority, date: date },
        ...state,
      ]
    case DELETE_TODO:
      return state.filter( todo  => todo.id !== payload );
    case UPDATE_TODO:
      return state.map( item => {
        if( item.id === payload.id ) {
          return {... payload};
        }
        return item;
      });
      case UPDATE_STATUS_TODO:
      return state.map( item => {
        if( item.id === payload.id ) {
          return {...item, completed: !payload.completed};
        }
        return item;
      });
      case RESTORE_TODO:
      state.splice( payload.index, 0, payload.todo )
      return [ ...state ]
    default:
      return state;
  }
};

export default todos;