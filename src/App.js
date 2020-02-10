import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from './actions'
import { UserDetails } from './components/UserDetails'
const App = () => {

  const { userId } = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <h1>Component example get user details for userid: { userId } </h1>
      <UserDetails />
      <button onClick={() => dispatch(userActions.getUserDetails(userId))}>get</button>
    </div>
  )
}

export default App