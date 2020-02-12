import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from './actions'
import { authActions } from './actions'
import { UserDetails } from './components/UserDetails'

export default () => {

  const { userId } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Login/Logout with JWT, fake-backend, redux and react testing library.</h1>
      { userId && <UserDetails /> }
      <div>
      { userId? <button onClick={() => dispatch(authActions.logout())}>logout</button>
        :
        <button onClick={() => dispatch(authActions.login('vo3xel', '123456'))}>login user: vo3xel with password: 123456</button>
      }  
      </div>
      <div>
        { userId && <button onClick={() => dispatch(userActions.getUserDetails(userId))}>get details of authenticated user</button> }
      </div>
    </div>
  )
}