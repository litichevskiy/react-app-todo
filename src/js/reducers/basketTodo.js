import { ADD_TODO_TO_BASKET, CLEAR_BASKET, DISMISS_DELETION } from '../constants';

const basketTodo = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case ADD_TODO_TO_BASKET:
      return {
        ...payload,
        isDismiss: false
      }
    case DISMISS_DELETION:
      return {
        index: state.index,
        todo: state.todo,
        isDismiss: payload
      }
    case CLEAR_BASKET:
      return payload
    default:
      return state;
  }
};

export default basketTodo;