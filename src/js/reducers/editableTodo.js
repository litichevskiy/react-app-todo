import { EDIT_TODO } from '../constants';

const editableTodo = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case EDIT_TODO:
      return payload
    default:
      return state;
  }
};

export default editableTodo;