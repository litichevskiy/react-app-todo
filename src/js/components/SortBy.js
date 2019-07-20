import React from 'react';
import PropTypes from 'prop-types';
import { IconChecked } from './icons';
import { filters } from './../config';
import { SHOW_ALL_TODO } from './../constants';
import Button from './Button';

const ESC_KEY_CODE = 27;

class SortBy extends React.Component {
  state = {
    filterName: this.props.visibilityFilter,
  }

  componentDidMount() {
    window.addEventListener('keyup', this.hideComponent );
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.hideComponent );
  }

  hideComponent = ( event ) => {
    if( event.keyCode === ESC_KEY_CODE ) this.props.toggleVisibility();
  };

  changeFilter = ( event ) => {
    const { value } = event.target
    this.setState({ filterName: value });
    this.props.sortBy( value );
  }

  render() {
    const { filterName } = this.state;
    const { toggleVisibility } = this.props;

    return (
      <div className='sort-by'>
        <h5 className='header-small'>Select todos:</h5>
        <div className='buttons-priority'>
          {filters.map(( item, index ) => {
            const { filter, title } = item;
            const isActive = ( filterName === filter );
            return (
              <label
                key={index}
                className={`
                  container-checkbox vertical-center priority ${isActive ? 'active' : ''}`}>
                <input
                  className='checkbox-input'
                  type='radio'
                  name='filter'
                  value={filter}
                  checked={isActive}
                  onChange={this.changeFilter} />
                  <span className='check-box radio'>
                    <IconChecked width={'11px'} height={'11px'}/>
                  </span>
                <span>{title}</span>
              </label>
            )
          })}
        </div>
        <Button
          className='btn btn-close'
          aria-label='Close sort elements'
          onClick={toggleVisibility}>
          Close
        </Button>
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