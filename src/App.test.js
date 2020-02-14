import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const initialState = { auth: { }, user: {}}
const mockStore = configureStore()
let store,wrapper

test('renders react 16 text', () => {
  store = mockStore(initialState)
  const { getByText } = render(<Provider store={store}><App /></Provider>)
  const element = getByText(/react application with react 16/i)
  expect(element).toBeInTheDocument()
})
