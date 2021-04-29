import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './components/pages/reducers/auth';

const composeEnchances = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

const store = createStore(reducer, composeEnchances(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app,
    document.getElementById
        ('root'));
        