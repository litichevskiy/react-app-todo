import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { IconClose } from './icons';
import isInteger from '../utils/isInteger';
import { DEFAULT_TRANSITION_TIME } from '../config';

const TIME_TO_REMOVE_TODO = 1000 * 10; // 10 second
const NOTE_RESTORED = 'note restored';
const NOTE_DELETED = 'note deleted';

class Basket extends React.Component{

  id = null;

  componentWillUnmount() {
    this.clearTimer( this.id );
  }

  dismissDeletion = () => {
    const { restoreTodo, todo, dismissDeletion } = this.props;
    restoreTodo( todo );
    dismissDeletion( true );
    this.setTimer();
  }

  showHideMessage = () => {
    this.props.clearBasket( null );
    this.clearTimer();
  }

  setTimer = () => {
    if ( isInteger( this.id ) ) this.clearTimer();

    this.id = setTimeout( () => {
      this.showHideMessage();
      this.id = null;
    }, TIME_TO_REMOVE_TODO );
  }

  clearTimer = () => {
    clearInterval( this.id );
  }

  render() {
    const { isShow, isDismiss } = this.props;

    return(
      <CSSTransition
        in={isShow}
        timeout={DEFAULT_TRANSITION_TIME}
        classNames='animation-dismiss-deletion-todo'
        mountOnEnter
        unmountOnExit
        onEnter={this.setTimer}>
        <div className='basket-container'>
          <div className='wrapper-max-width'>
            <div className='basket-content default-box-shadow'>
              <span className='message-text'>{!isDismiss ? NOTE_DELETED : NOTE_RESTORED}</span>
              { !isDismiss && <button
                className='btn-dismissDeletion'
                onClick={this.dismissDeletion}>
                  dismiss
                </button>
              }
              <button
                className='btn-close'
                onClick={this.showHideMessage}>
                  <IconClose width='19px' height='19px' fill='white' />
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
};

Basket.propTypes = {
  clearBasket: PropTypes.func.isRequired,
  restoreTodo: PropTypes.func.isRequired,
  todo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
};

export default Basket;