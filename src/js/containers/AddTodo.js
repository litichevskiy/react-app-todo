import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoForm from '../components/TodoForm';

const mapDispatchToProps = ( dispatch ) => ({
  saveTodo: ( todo ) => {
    dispatch( addTodo( todo ) );
  }
});

const AddTodo = connect(
  null,
  mapDispatchToProps
)( TodoForm );

export default AddTodo;