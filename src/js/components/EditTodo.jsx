import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

const EditTodo = ({ todo, editDone, saveTodo }) => {
  if( !Object.keys( todo ).length ) return null;
  else{
    const {id, completed, value, priority} = todo;
    return(
       <React.Fragment>
          <TodoForm
            aria-label='Save changes'
            toggleVisibility={editDone}
            value={value}
            id={id}
            completed={completed}
            priority={priority}
            saveTodo={saveTodo}/>
        </React.Fragment>
    )
  }
};

EditTodo.defaultProps = {
  value: '',
  priority: 'low',
  completed: false,
  id: 0,
  toggleVisibility: () => {},
  saveTodo: () => {},
  todo: {},
};

EditTodo.propTypes = {
  value: PropTypes.string,
  priority: PropTypes.string,
  completed: PropTypes.bool,
  id: PropTypes.number,
  toggleVisibility: PropTypes.func,
  saveTodo: PropTypes.func,
  todo: PropTypes.object,
};

export default EditTodo;