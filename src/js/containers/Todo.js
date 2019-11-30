import { connect } from 'react-redux';
import { deleteTodo, editTodo, editStatusTodo, addTodoToBasket } from '../actions';
import TodoList from '../components/TodoList';
import {
  SHOW_ALL_TODO,
  SHOW_COMPLETED_TODO,
  SHOW_LOW_PRIORITY_TODO,
  SHOW_MIDDLE_PRIORITY_TODO,
  SHOW_HIGH_PRIORITY_TODO } from '../constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL_TODO:
      return todos;
    case SHOW_COMPLETED_TODO:
      return filterByCompleted( todos );
    case SHOW_LOW_PRIORITY_TODO:
      return filterByPriority( todos, 'low' );
    case SHOW_MIDDLE_PRIORITY_TODO:
      return filterByPriority( todos, 'middle' );
    case SHOW_HIGH_PRIORITY_TODO:
      return filterByPriority( todos, 'high' );
    default:
      return todos;
  }
};

const filterByCompleted = ( todos ) => todos.filter( todo => todo.completed );

const isMatchTodos = ( todos ) => ( todos.length > 0 ) ? true : false;

const filterByPriority = ( todos, priority ) => {
  return todos.filter( todo => todo.priority === priority );
};


const mapStateToProps = ( state ) => {
  const todos = getVisibleTodos( state.todos, state.visibilityFilter );
  const isMatch = ( state.visibilityFilter === SHOW_ALL_TODO ) ? true : isMatchTodos( todos );
  return { todos, isMatch };
};

const mapDispatchToProps = ( dispatch ) => ({
  deleteTodo: ( id ) => {
    dispatch( deleteTodo( id ) );
  },

  addTodoToBasket ( data ) {
    dispatch( addTodoToBasket( data ) );
  },

  editTodo( id ) {
    dispatch( editTodo( id ) );
  },

  changeStatus( id, isDode ) {
    dispatch( editStatusTodo( id, isDode ) );
  },
});

const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)( TodoList );

export default Todo;