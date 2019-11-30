import { SET_VISIBILITY_FILTER, SHOW_ALL_TODO } from '../constants';

const visibilityFilter = ( state = SHOW_ALL_TODO, { type, payload } ) => {
  switch ( type ) {
    case SET_VISIBILITY_FILTER:
      return payload
    default:
      return state;
  }
};

export default visibilityFilter;