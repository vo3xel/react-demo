import { createStore, applyMiddleware } from 'redux'
import  { default as allReducers } from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export default createStore(
    allReducers, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)