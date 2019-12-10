import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from '../containers/AddTodo';
import Sort from '../containers/Sort';
import EditTodo from '../containers/EditTodo';
import Button from './Button';
import { IconPlus, IconSort } from './icons';
import { SHOW_LOW_PRIORITY_TODO, SHOW_ALL_TODO } from '../constants';

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
      <div className={ !isSortTodo ? 'navigation' : 'navigation sort-active'}>
        <div className='wrapper-max-width'>
          {
            isAddTodo &&
            <AddTodo
              toggleVisibility={this.toggleVisibilityAddTodo} />
          }
          <EditTodo aria-label='Add todo'/>
          <Sort
            toggleVisibility={this.toggleVisibilitySort}
            visibilityFilter={SHOW_LOW_PRIORITY_TODO}
            isShow={isSortTodo} />
          <div className='buttons-wrapper'>
            {
              isMoreOneTodo && <Button
                className='btn sort-todos'
                aria-label='Show sort todos'
                onClick={this.toggleVisibilitySort}>
                <IconSort width='1.6rem' height='1.6rem' fill='#fff' />
              </Button>
            }
            <Button
              className='btn add-new-item'
              aria-label='Add new todo'
              onClick={this.toggleVisibilityAddTodo}>
              <IconPlus width='1.6rem' height='1.6rem' fill='#fff' strokeWidth='2' />
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