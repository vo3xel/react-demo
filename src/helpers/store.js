import { createStore, applyMiddleware } from 'redux'
import  allReducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export const store = createStore(
    allReducers, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)