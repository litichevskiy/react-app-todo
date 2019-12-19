import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import AddTodo from '../containers/AddTodo';
import Sort from '../containers/Sort';
import Button from './Button';
import { IconPlus, IconSort } from './icons';
import { SHOW_LOW_PRIORITY_TODO, SHOW_ALL_TODO } from '../constants';
import { DEFAULT_TRANSITION_TIMEOUT } from './../config';

class Navigation extends React.Component {
  state = {
    isAddTodo: false,
    isSortTodo: false,
  };

  componentDidUpdate() {
    if( this.state.isSortTodo && !this.props.isMoreOneTodo ) {
      this.toggleVisibilitySort();
    }
  }

  toggleVisibilityAddTodo = () => {
    this.setState({ isAddTodo: !this.state.isAddTodo });
  }

  toggleVisibilitySort = () => {
    this.setState({ isSortTodo: !this.state.isSortTodo });
    this.props.sortBy( SHOW_ALL_TODO );
  }

  render() {
    const { isAddTodo, isSortTodo } = this.state;
    const { isMoreOneTodo } = this.props;

    return(
      <div className='navigation'>
        <div className='wrapper-max-width'>
          <CSSTransition
            in={isAddTodo}
            timeout={DEFAULT_TRANSITION_TIMEOUT}
            classNames='animation-todo-form'
            unmountOnExit>
            <AddTodo
              toggleVisibility={this.toggleVisibilityAddTodo}
              isFocus={true} />
          </CSSTransition>
          <CSSTransition
            in={isSortTodo}
            timeout={DEFAULT_TRANSITION_TIMEOUT}
            classNames='sort-by-animation'
            unmountOnExit>
            <Sort
              toggleVisibility={this.toggleVisibilitySort}
              visibilityFilter={SHOW_LOW_PRIORITY_TODO}/>
          </CSSTransition>
          <div className='buttons-wrapper'>
            {
              isMoreOneTodo && <Button
                className='btn sort-todos'
                aria-label='Show sort todos'
                onClick={this.toggleVisibilitySort}>
                <IconSort width='28px' height='28px' fill='#fff' />
              </Button>
            }
            <Button
              className='btn add-new-item'
              aria-label='Add new todo'
              onClick={this.toggleVisibilityAddTodo}>
              <IconPlus width='28px' height='28px'  fill='#fff' strokeWidth='2' />
            </Button>
          </div>
        </div>
      </div>
    )
  }
};

Navigation.defaultProps = {
  isMoreOneTodo: false,
};

Navigation.propTypes = {
  isMoreOneTodo: PropTypes.bool.isRequired,
};

export default Navigation;