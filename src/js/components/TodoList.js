import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Alert from './Alert';

class TodoList extends React.Component{

  changeStatus = ( id, isCompleted ) => {
    this.props.changeStatus( id, isCompleted );
  }

  editTodo = ( id ) => {
    this.props.editTodo( id );
  }

  deleteTodo = ( id ) => {
    this.props.deleteTodo( id );
  }

  addTodoToBasket = ( id ) => {
    const { todos } = this.props;

    todos.some(( item, index ) => {
      if( item.id === id ) {
        this.props.addTodoToBasket({
          index: index,
          todo: item
        });
        return true;
      }
      else return false
    });
  }

  addToBasketAndRemove = ( id ) => {
    this.addTodoToBasket( id );
    this.deleteTodo( id );
  }

  render() {
    const { todos, isMatch } = this.props;
    if( !isMatch ) return <Alert><div className='no-match'>No matches</div></Alert>
    else{
      return (
        <ul className='todo-list'>
          {todos.map( todo => {
            return (
              <TodoItem key={todo.id}
                todo={todo}
                editTodo={this.editTodo}
                deleteTodo={this.addToBasketAndRemove}
                changeStatus={this.changeStatus}/>
            )
          })}
        </ul>
      );
    }
  }
};

TodoList.defaultProps = {
  changeStatus: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  todos: [],
  isMatch: true,
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  changeStatus: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  isMatch: PropTypes.bool.isRequired,
};

export default TodoList;