import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { UserDetails } from './components/UserDetails'
import { ThreeScene } from './components/ThreeScene'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: block;
  text-align: center;
  font-size: 30px;
  margin-left: 15px;
  margin-right: 15px;
`

export default () => {

  const { userId } = useSelector(state => state.auth)

  return (
      <Container fluid>
        { !userId && <Row className="justify-content-center"><img src={logo} className="App-logo" alt="logo" /></Row> }
        { userId && <Row><ThreeScene /></Row> }
        <Row className="mb-3">
          <StyledDiv>A dockerized state-of-the-art react application with react 16, threejs, JWT token, redux, fake-backend, bootstrap, styled components and react testing library</StyledDiv>
        </Row>
        { userId && <UserDetails /> }
      </Container>
  )
}