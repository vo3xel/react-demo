
import { default as alert } from './alert.reducer'
import { default as user } from './user.reducer'
import { default as auth } from './auth.reducer'
import { default as three } from './three.reducer'
import { authConstants } from '../constants'

import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    alert,
    auth,
    three,
    user
})

export default (state, action) => {
    if (action.type === authConstants.LOGOUT){
      state = undefined
    }
    return combinedReducers(state, action)
}