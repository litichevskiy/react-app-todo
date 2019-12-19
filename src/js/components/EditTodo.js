import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import TodoForm from './TodoForm';
import { DEFAULT_TRANSITION_TIMEOUT } from './../config';

const EditTodo = ({ todo, editDone, saveTodo, isShow }) => {
  const {id, completed, value, priority} = todo;
  return(
    <CSSTransition
      in={isShow}
      timeout={DEFAULT_TRANSITION_TIMEOUT}
      classNames='animation-todo-form'
      unmountOnExit>
        <TodoForm
          isFocus={false}
          aria-label='Save changes'
          toggleVisibility={editDone}
          value={value}
          id={id}
          completed={completed}
          priority={priority}
          saveTodo={saveTodo}/>
    </CSSTransition>
  )
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