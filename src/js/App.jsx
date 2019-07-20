import React from 'react';
import Todo from './containers/Todo';
import Navigation from './containers/Navigation';

const App = () => (
  <React.Fragment>
    <Navigation />
    <Todo />
  </React.Fragment>
);

export default App;