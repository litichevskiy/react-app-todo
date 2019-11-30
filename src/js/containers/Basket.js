import { connect } from 'react-redux';
import { clearBasket, restoreTodo } from '../actions';
import basket from '../components/Basket';

const mapStateToProps = ({ basketTodo }) => ({
  isShow: ( basketTodo ) ? true : false,
  todo: basketTodo
});

const mapDispatchToProps = ( dispatch ) => ({
  clearBasket: ( data ) => {
    dispatch( clearBasket( data ) );
  },

  restoreTodo( data ) {
    dispatch( restoreTodo( data ) );
  },
});

const Basket = connect(
  mapStateToProps,
  mapDispatchToProps
)( basket );

export default Basket;