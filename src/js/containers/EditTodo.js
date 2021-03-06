import { connect } from 'react-redux';
import { updateTodo, editTodo } from '../actions';
import EditItem from '../components/EditTodo';

const mapStateToProps = ({ todos, editableTodo }) => {
  if( editableTodo ) {
    return {
      todo: todos.filter( todo => todo.id === editableTodo )[0],
      isShow: true,
    };
  }

  else return { todo: {}, isShow: null };
}

const mapDispatchToProps = ( dispatch ) => ({
  saveTodo: ( todo ) => {
    dispatch( updateTodo( todo ) );
    dispatch( editTodo( null ) );
  },

  editDone() {
    dispatch( editTodo( null ) );
  },
});

const EditTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)( EditItem );

export default EditTodo;