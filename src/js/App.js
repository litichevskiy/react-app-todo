import React from 'react';
import Todo from './containers/Todo';
import Navigation from './containers/Navigation';
import Basket from './containers/Basket';

const App = () => (
  <React.Fragment>
    <Navigation />
    <Todo />
    <Basket />
  </React.Fragment>
);

export default App;