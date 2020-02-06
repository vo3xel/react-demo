import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './helpers'
import { configureFakeBackend } from './helpers'
import config from 'react-global-configuration'
import configuration from './config/dev'
import App from './App'

const rootElement = document.getElementById('root')

config.set(configuration)

if(config.get('configureFakeBackend')){
    console.warn("WARNING: fake backend activated for dev config !!!")
    configureFakeBackend();
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();