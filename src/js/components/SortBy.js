import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { IconChecked, IconArrowLeft } from './icons';
import { filters, DEFAULT_TRANSITION_TIMEOUT } from './../config';
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

  hideComponent = ( event ) => {
    if( event.keyCode === ESC_KEY_CODE ) this.props.toggleVisibility();
  };

  changeFilter = ( event ) => {
    const { value } = event.target
    this.props.sortBy( value );
  }

  render() {
    const { toggleVisibility, isShow, visibilityFilter } = this.props;

    return (
      <CSSTransition
        in={isShow}
        timeout={DEFAULT_TRANSITION_TIMEOUT}
        classNames='sort-by-animation'
        mountOnEnter
        unmountOnExit>
        <div className='sort-by'>
          <Button
            className='btn btn-close'
            aria-label='Close sort elements'
            onClick={toggleVisibility}>
              <IconArrowLeft width='1.9rem' height='1.9rem' strokeWidth='2' />
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
                    <span className={`check-box radio sort-by-${title}`} title={`Sort by ${title}`}>
                      <IconChecked width={'20px'} height={'20px'} fill='#fff'/>
                    </span>
                </label>
              )
            })}
          </div>
        </div>
      </CSSTransition>
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
  isShow: PropTypes.bool.isRequired,
};

export default SortBy;