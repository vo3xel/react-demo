
import alert from './alert.reducer'
import user from './user.reducer'
import { userConstants } from '../constants'

import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
    alert,
    user
})

const allReducers = (state, action) => {
    if (action.type === userConstants.LOGOUT) {
      state = undefined
    }
  
    return combinedReducers(state, action)
  }

export default allReducers