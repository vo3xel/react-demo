import { useSelector } from 'react-redux'
import React from 'react'

export default () => {

    const { userId } = useSelector(state => state.user)
    const { user } = useSelector(state => state.user)

    return (
        <div>User details for user ({userId}):
        <p>{ JSON.stringify(user) }</p>
        </div>
        
    )
}