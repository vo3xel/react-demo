import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from './actions'
import { authActions } from './actions'
import { UserDetails } from './components/UserDetails'

export default () => {

  const { userId } = useSelector(state => state.user)
  const { user } = useSelector( state => state.user)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <h1>Component example get user details for userid: { userId } </h1>
      <UserDetails />
      <button onClick={() => dispatch(authActions.login('vo3xel', '123456'))}>authenticate user</button>
      { user && <button onClick={() => dispatch(userActions.getUserDetails(user.id))}>get details of authenticated user</button> }
    </div>
  )
}