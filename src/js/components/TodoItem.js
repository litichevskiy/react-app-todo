import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formateDate';
import Button from './Button';
import { IconEdit, IconDelete, IconChecked } from './icons';

const TodoItem = ({
  todo:{ value, priority, id, completed, date },
  editTodo, deleteTodo, changeStatus }) => {
  const { year, month, day, hours, minutes, fullDateISO } = formatDate( date );

  return (
    <li
      data-id={id}
      className={completed ? 'todo completed' : 'todo'}>
      <div className='navigation-todo vertical-center'>
        <div className='vertical-center'>
          <Button
            className='btn edit'
            aria-label='Edit todo'
            onClick={editTodo}>
            <IconEdit />
          </Button>
          <span className={`priority ${priority}`}></span>
        </div>
        <div className='vertical-center'>
          <Button
            className='btn delete'
            aria-label='Delete todo'
            onClick={deleteTodo}>
            <IconDelete />
          </Button>
        </div>
      </div>
      <div>
        <div className='header-todo vertical-center'>
          <label className='container-checkbox vertical-center'>
            <input
              type='checkbox'
              aria-label='completed todo'
              className='checkbox-input'
              onChange={changeStatus}
              checked={completed}/>
            <span className='check-box radio'>
              <IconChecked
                width={'15px'}
                height={'15px'}/>
            </span>
          </label>
          <pre className='time'>
            <time dateTime={fullDateISO}>
              {`${day} ${month} ${year}  ${hours}:${minutes}`}
            </time>
          </pre>
        </div>
        <p className='todo-content'>{value}</p>
      </div>
    </li>
  )
};

TodoItem.defaultProps = {
  todo: {},
  editTodo: () => {},
  deleteTodo: () => {},
  changeStatus: () => {},
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    value: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  changeStatus: PropTypes.func,
};

export default TodoItem;