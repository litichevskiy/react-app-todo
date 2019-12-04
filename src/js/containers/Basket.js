import { connect } from 'react-redux';
import { clearBasket, restoreTodo, dismissDeletion } from '../actions';
import basket from '../components/Basket';

const mapStateToProps = ({ basketTodo }) => ({
  isShow: ( basketTodo ) ? true : false,
  todo: basketTodo,
  isDismiss: ( basketTodo ) ? basketTodo.isDismiss : false
});

const mapDispatchToProps = ( dispatch ) => ({
  clearBasket: ( data ) => {
    dispatch( clearBasket( data ) );
  },

  restoreTodo( data ) {
    dispatch( restoreTodo( data ) );
  },

  dismissDeletion( bool ) {
    dispatch( dismissDeletion( bool ) )
  },
});

const Basket = connect(
  mapStateToProps,
  mapDispatchToProps
)( basket );

export default Basket;