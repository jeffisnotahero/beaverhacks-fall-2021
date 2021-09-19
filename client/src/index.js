// Index.js, to connect all our React application to index.html
import React from 'react';
import ReactDOM from 'react-dom';

// Provider, to allow to use the React 'state' anywhere, no need to pass state between Parent or Child component
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
        );