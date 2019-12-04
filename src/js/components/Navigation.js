import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from '../containers/AddTodo';
import Sort from '../containers/Sort';
import EditTodo from '../containers/EditTodo';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { IconPlus } from './icons';
import { SHOW_ALL_TODO } from '../constants';

class Navigation extends React.Component {
  state = {
    isAddTodo: false,
    isSortTodo: false,
  };

  componentDidUpdate() {
    if( this.state.isSortTodo && !this.props.isTodos ) {
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
    const { isTodos } = this.props;

    return(
      <div className={ !isSortTodo ? 'navigation' : 'navigation sort-active'}>
        <div className='wrapper-max-width'>
          { isSortTodo &&
            <Sort toggleVisibility={this.toggleVisibilitySort} />
          }
          {
            isTodos && !isSortTodo &&
            <ButtonGroup className='btn-group double-btn'>
              <Button
                className='btn'
                aria-label='Show sort todos'
                onClick={this.toggleVisibilitySort}>
                Sort
              </Button>
              <Button
                className='btn'
                aria-label='Add new todo'
                onClick={this.toggleVisibilityAddTodo}>
                Add new
              </Button>
            </ButtonGroup>
          }
          {
            isAddTodo &&
            <AddTodo
              toggleVisibility={this.toggleVisibilityAddTodo} />
          }
          {
            !isTodos && !isSortTodo &&
            <Button
              className='btn add-todo vertical-center'
              aria-label='Add new todo'
              onClick={this.toggleVisibilityAddTodo}>
              <IconPlus
                fill='white'
                width='23px'
                height='23px' />
              <span className='btn-text'>Add new</span>
            </Button>
          }
          <EditTodo aria-label='Add todo'/>
        </div>
      </div>
    )
  }
};

Navigation.defaultProps = {
  isTodos: false,
};

Navigation.propTypes = {
  isTodos: PropTypes.bool.isRequired,
};

export default Navigation;