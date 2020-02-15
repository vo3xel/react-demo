import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { userActions } from '../../actions'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import styled from 'styled-components'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import { threeActions } from '../../actions'

const StyledUserInformation = styled.div`
  display: block;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px;
`

const popover = (userDetails) => (
    <Popover id="popover-basic">
        <Popover.Title as="h2">User details</Popover.Title>
        <Popover.Content>
            <StyledUserInformation>
                <strong>id: </strong> { userDetails.id } <br />
                <strong>userName: </strong> { userDetails.userName } <br />
                <strong>password: </strong> { userDetails.password } <br />
                <strong>email: </strong> { userDetails.email } <br />
                <strong>firstName: </strong> { userDetails.firstName } <br />
                <strong>lastName: </strong> { userDetails.lastName } <br />
             </StyledUserInformation>
        </Popover.Content>
    </Popover>
)

export default () => {

    const { user } = useSelector(state => state.user)
    const { userId } = useSelector(state => state.auth)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(userActions.getUserDetails(userId))
    },[userId, dispatch])

    return (
        <Row>
            <Col lg={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Authenticated user action: get user details</Card.Title>
                        <Card.Text>This action returns detailed information about the logged in user.</Card.Text>
                        { user && 
                            <OverlayTrigger trigger="click" placement="right" overlay={popover(user)}>
                                <Button>Get details of user</Button>
                            </OverlayTrigger>
                        }
                    </Card.Body>
                </Card>   
            </Col>
            <Col lg={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Authenticated user action: set threejs scene box size</Card.Title>
                        <Card.Text>This action sets the box size in the threejs scene.</Card.Text>
                        { user && 
                            <DropdownButton id="dropdown-basic-button" title="Box size">
                                <Dropdown.Item onClick={() => dispatch(threeActions.setBoxScale(1))}>1</Dropdown.Item>
                                <Dropdown.Item onClick={() => dispatch(threeActions.setBoxScale(1.5))}>1.5</Dropdown.Item>
                                <Dropdown.Item onClick={() => dispatch(threeActions.setBoxScale(2))}>2</Dropdown.Item>
                                <Dropdown.Item onClick={() => dispatch(threeActions.setBoxScale(2.5))}>2.5</Dropdown.Item>
                            </DropdownButton>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}