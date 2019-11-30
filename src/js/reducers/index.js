import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import editableTodo from './editableTodo';
import basketTodo from './basketTodo';


const rootReducer = combineReducers({
  visibilityFilter,
  todos,
  editableTodo,
  basketTodo
});

export default rootReducer;