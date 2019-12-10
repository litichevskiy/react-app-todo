import { connect } from 'react-redux';
import NavPanel from '../components/Navigation';
import { setVisibilityFilter } from '../actions';

const MIN_TODOS_FOR_SORT = 2;

const mapStateToProps = ( state ) => ({
  isMoreOneTodo: ( state.todos.length >= MIN_TODOS_FOR_SORT ) ? true : false
});

const mapDispatchToProps = ( dispatch ) => ({
  sortBy: ( filterName ) => {
    dispatch( setVisibilityFilter( filterName ) );
  },
});

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)( NavPanel );

export default Navigation;