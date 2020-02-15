import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './MenuBar.css';
import { authActions } from '../../actions'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  
  const dispatch = useDispatch()

  const { userId } = useSelector(state => state.auth)

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand>React-demo</Navbar.Brand>
        <Nav className="mr-auto">
          {/* no content yet*/}
        </Nav>
        <Form inline>
          <Button onClick={() => userId? dispatch(authActions.logout()) : dispatch(authActions.login('vo3xel', '123456'))}>
            <FontAwesomeIcon icon={userId? faSignOutAlt : faSignInAlt} /> { userId? "logout": "login" }
          </Button>
        </Form>
    </Navbar>
  )
}