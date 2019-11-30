import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  SET_VISIBILITY_FILTER,
  UPDATE_STATUS_TODO,
  ADD_TODO_TO_BASKET,
  CLEAR_BASKET,
  RESTORE_TODO } from '../constants';

export const addTodo = ( todo ) => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = ( id ) => ({
  type: DELETE_TODO,
  payload: id
});

export const setVisibilityFilter = ( filter ) => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
});

export const editTodo = ( id ) => ({
  type: EDIT_TODO,
  payload: id
});

export const updateTodo = ( todo ) => ({
  type: UPDATE_TODO,
  payload: todo
});

export const editStatusTodo = ( id, completed ) => ({
  type: UPDATE_STATUS_TODO,
  payload: {id, completed}
});

export const addTodoToBasket = ({ index, todo }) => ({
  type: ADD_TODO_TO_BASKET,
  payload: {index, todo}
});

export const clearBasket = ( basket ) => ({
  type: CLEAR_BASKET,
  payload: basket
});

export const restoreTodo = ({ todo, index }) => ({
  type: RESTORE_TODO,
  payload: { todo, index }
});