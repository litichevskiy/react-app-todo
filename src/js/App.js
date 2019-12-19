import React from 'react';
import Todo from './containers/Todo';
import Navigation from './containers/Navigation';
import Basket from './containers/Basket';
import EditTodo from './containers/EditTodo';

const App = () => (
  <React.Fragment>
    <Navigation />
    <Todo />
    <EditTodo aria-label='Add todo'/>
    <Basket />
  </React.Fragment>
);

export default App;