import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import SortBy from '../components/SortBy';

const mapStateToProps = (state) => ({
   visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = ( dispatch ) => ({
  sortBy: ( filterName ) => {
    dispatch( setVisibilityFilter( filterName ) );
  },
});

const Sort = connect(
  mapStateToProps,
  mapDispatchToProps
)( SortBy );

export default Sort;