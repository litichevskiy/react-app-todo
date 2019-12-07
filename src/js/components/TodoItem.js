import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formateDate';
import Button from './Button';
import { IconEdit, IconDelete, IconChecked } from './icons';
import Swipedetect from '../utils/Swipedetect';

const MAX_OFFSET = 50; // percent

class TodoItem extends React.Component{

  constructor( props ) {
    super( props );

    const { year, month, day, hours, minutes, fullDateISO } = formatDate( new Date );
    this.createdDate = `${day} ${month} ${year}  ${hours}:${minutes}`;
    this.fullDateISO = fullDateISO;
    this.todoWrapperRef = React.createRef();
    this.todeRef = React.createRef();
    this.swipedetect;
  }

  componentDidMount() {
    this.swipedetect = new Swipedetect({
      container: this.todoWrapperRef.current,
      handleMove: this.touchMove,
      handleEnd: this.touchEnd,
    });
  }

  componentWillUnmount() {
    this.swipedetect.destroy();
    this.swipedetect = null;
    this.todoWrapperRef.current.removeEventListener('transitionend', this.deleteTodo );
    this.todeRef.current.removeEventListener('transitionend', this.deleteTodo );
  }

  touchMove = ( pageX, target ) => {
    const _pageX = ( pageX < 0 ) ? -pageX : pageX;
    target.style.transform = `translateZ(0) translateX(${pageX}px)`;
  }

  touchEnd = ( pageX, target, direction ) => {
    if( pageX < 0 ) pageX = -pageX;
    const offset = getPercent( target.clientWidth, pageX );

    if( offset > MAX_OFFSET ) {

      const className = ( direction === 'left' ) ? 'touchend-left-animation' : 'touchend-right-animation'

      target.classList.add( className );
      target.addEventListener('transitionend', this.deleteTodo );
      target.parentElement.classList.add('todo-delete-animation');

    } else {

      target.classList.add('touchend-animation');
      target.addEventListener('transitionend', this.deleteSwipeAnimation );
      target.style.transform = `translateZ(0) translateX(0)`;
    }
  }


  deleteSwipeAnimation = () => {
    const { current } = this.todoWrapperRef;
    current.classList.remove('touchend-animation');
    current.removeEventListener('transitionend', this.deleteSwipeAnimation );
  }

  editTodo = () => {
    this.props.editTodo( this.props.todo.id );
  }

  deleteTodoWithAnimation = () => {
    const { current } = this.todeRef;
    current.classList.add('todo-delete-animation');
    current.addEventListener('transitionend', this.deleteTodo );
  }

  deleteTodo = () => {
    this.props.deleteTodo( this.props.todo.id );
  }

  changeStatus = () => {
    const { completed, id } = this.props.todo;
    this.props.changeStatus( id, completed );
  }

  render() {
    const { value, priority, id, completed } = this.props.todo;

    return (
      <li
        ref={this.todeRef}
        data-id={id}
        className={completed ? 'todo completed' : 'todo'}>
        <div className='todo-wrapper' ref={this.todoWrapperRef}>
          <div className='navigation-todo vertical-center'>
            <div className='vertical-center'>
              <Button
                className='btn edit'
                aria-label='Edit todo'
                onClick={this.editTodo}>
                <IconEdit />
              </Button>
              <span className={`priority ${priority}`}></span>
            </div>
            <div className='vertical-center'>
              <Button
                className='btn delete'
                aria-label='Delete todo'
                onClick={this.deleteTodoWithAnimation}>
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
                  onChange={this.changeStatus}
                  checked={completed}/>
                <span className='check-box radio'>
                  <IconChecked
                    width={'15px'}
                    height={'15px'}/>
                </span>
              </label>
              <pre className='time'>
                <time dateTime={this.fullDateISO}>
                  {this.createdDate}
                </time>
              </pre>
            </div>
            <p className='todo-content'>{value}</p>
          </div>
        </div>
      </li>
    )
  }
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

const getPercent = ( a, b ) => 100 / ( a / b );

export default TodoItem;