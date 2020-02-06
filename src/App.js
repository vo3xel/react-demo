import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
const App = () => {

  const { userID } = useSelector(state => state.user)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <h1>Component example get user details for userid: { userID } </h1>
      <button onClick={() => dispatch()}>get</button>
    </div>
  )
}

export default App