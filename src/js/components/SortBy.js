import React from 'react';
import PropTypes from 'prop-types';
import { IconChecked, IconArrowLeft } from './icons';
import { filters } from './../config';
import { SHOW_ALL_TODO } from './../constants';
import Button from './Button';

const ESC_KEY_CODE = 27;

class SortBy extends React.Component {

  componentDidMount() {
    window.addEventListener('keyup', this.hideComponent );
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.hideComponent );
  }

  hideComponent = ({ keyCode }) => {
    if( keyCode === ESC_KEY_CODE ) this.props.toggleVisibility();
  };

  changeFilter = ({ target }) => {
    this.props.sortBy( target.value );
  }

  render() {
    const { toggleVisibility, visibilityFilter } = this.props;

    return (
      <div className='sort-by'>
        <Button
          className='btn btn-close'
          aria-label='Close sort elements'
          onClick={toggleVisibility}>
            <IconArrowLeft width='28px' height='28px' strokeWidth='2' fill='#fff' />
        </Button>
        <div className='buttons-priority'>
          {filters.map(( item, index ) => {
            const { filter, title } = item;
            const isActive = ( visibilityFilter === filter );
            return (
              <label
                key={index}
                className={`container-checkbox ${isActive ? 'active' : ''}`}>
                <input
                  className='checkbox-input'
                  type='radio'
                  name='filter'
                  value={filter}
                  checked={isActive}
                  onChange={this.changeFilter} />
                  <span className={`check-box radio priority-${title}`} title={`Sort by ${title}`}>
                    <IconChecked width={'20px'} height={'20px'} fill='#fff'/>
                  </span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }
};

SortBy.defaultProps = {
  visibilityFilter: SHOW_ALL_TODO,
  sortBy: () => {},
  toggleVisibility: () => {},
};

SortBy.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  sortBy: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default SortBy;