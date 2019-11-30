import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import storageApi from './storageApi';
import initStore from './store';
import swRegister from './serviceWorkerRegister';

initStore()
.then( store => {
  store.subscribe( () => {
    storageApi.updateStorage( store.getState() )
    .catch( error => console.error( error ));
  });

  swRegister();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.app')
  );
})
.catch( error => console.error( error ));