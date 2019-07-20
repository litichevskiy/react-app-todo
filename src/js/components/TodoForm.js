import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { IconChecked } from './icons';
import { priorities, DEFAULT_PRIORITY } from './../config';

const ESC_KEY_CODE = 27;

class TodoForm extends React.Component{
  state = {
    id: this.props.id,
    value: this.props.value,
    priority: this.props.priority,
    completed: this.props.completed,
    isError: false,
  }

  componentDidMount() {
    window.addEventListener('keyup', this.hideComponent );
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.hideComponent );
  }

  hideComponent = ( event ) => {
    if( event.keyCode === ESC_KEY_CODE ) this.props.toggleVisibility();
  }

  save = ( event ) => {
    event.preventDefault();
    const { value, priority, completed, id } = this.state;

    if( !isEmptyValue( value ) ) this.setState({ isError: true });
    else{
      this.props.saveTodo({
        id: id || getId(),
        value: value,
        completed: completed,
        priority: priority,
        date: new Date,
      });
      this.clear();
    }
  }

  clear = () => {
    this.setState({
      value: '',
      priority:
      this.props.priority,
      completed: this.props.completed
    });
    this.props.toggleVisibility();
  }

  setValue = ( event ) => {
      this.setState({ value: event.target.value, isError: false });
  }

  changePriority = ( event ) => {
    this.setState({ priority: event.target.value });
  }

  render() {
    const { isError, priority, value } = this.state;
    const { ariaLabel } = this.props
    return (
      <form className='TodoForm'>
        <div className='wrapper-max-width'>
          <textarea
          className={isError ? 'input error' : 'input'}
          autoFocus
          aria-label={ariaLabel}
          placeholder="Enter your text"
          value={value}
          onChange={this.setValue}></textarea>
          {
            isError &&
            <Alert>
              <div className='error-message'>
                This field can't be empty
              </div>
            </Alert>
          }
          <footer className='footer'>
            <div className='container-priority'>
              <h5 className='header-small'>priority:</h5>
              <ButtonGroup className='btn-group vertical-center'>
                {priorities.map(( item, index ) => {
                  return(
                    <label
                      key={index}
                      className={`container-checkbox vertical-center priority ${item}`}>
                      <input
                        className='checkbox-input'
                        type="radio"
                        name="priority"
                        defaultValue={item}
                        checked={priority === item}
                        onChange={this.changePriority} />
                        <span className='check-box radio'>
                          <IconChecked width={'12px'} height={'12px'}/>
                        </span>
                        <span>{item}</span>
                    </label>
                  )
                })}
              </ButtonGroup>
            </div>
            <ButtonGroup className='btn-group'>
              <Button
                className='btn'
                aria-label='Cancel'
                onClick={this.clear}>
                  Cancel
              </Button>
              <Button
                className='btn btn-save-task'
                type='submit'
                aria-label='Save'
                onClick={this.save}>
                  Save
              </Button>
            </ButtonGroup>
          </footer>
        </div>
      </form>
    )
  }
};

const isEmptyValue = ( value ) => {
  return ( value.trim() ) ? true : false;
};

const getId = () => Date.now();

TodoForm.defaultProps = {
  value: '',
  id: 0,
  completed: false,
  priority: DEFAULT_PRIORITY,
  toggleVisibility: () => {},
};

TodoForm.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
  priority: PropTypes.string,
  toggleVisibility: PropTypes.func,
};

export default TodoForm;