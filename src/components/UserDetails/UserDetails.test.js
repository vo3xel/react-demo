import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { UserDetails } from '.'

const initialState = { auth: { }, user: {}}
const mockStore = configureStore()
let store

test('renders correctly', () => {
    store = mockStore(initialState)
    const { getByText, getByRole, container, asFragment } = render(
        <Provider store={store}><UserDetails /></Provider>
        )
  expect(container).toMatchInlineSnapshot();
})