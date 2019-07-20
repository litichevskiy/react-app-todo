import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Alert from './Alert';
import getParentNode from '../utils/getParentNode';

class TodoList extends React.Component{

  getIdByAttribute ( domNode ) {
    const parentNode = getParentNode( domNode, 'LI' );
    return +parentNode.getAttribute('data-id');
  }

  changeStatus = ( event ) => {
    const target = event.target;
    const id = this.getIdByAttribute( target );
    this.props.changeStatus( id, target.checked );
  }

  editTodo = ( event ) => {
    const id = this.getIdByAttribute( event.target );
    this.props.editTodo( id );
  }

  deleteTodo = ( event ) => {
    const id = this.getIdByAttribute( event.target );
    this.props.deleteTodo( id );
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
                deleteTodo={this.deleteTodo}
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