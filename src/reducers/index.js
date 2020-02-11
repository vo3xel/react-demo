
import { default as alert } from './alert.reducer'
import { default as user } from './user.reducer'
import { default as auth } from './auth.reducer'
import { userConstants } from '../constants'

import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    alert,
    auth,
    user
})

export default (state, action) => {
    if (action.type === userConstants.LOGOUT){
      state = undefined
    }
    return combinedReducers(state, action)
}