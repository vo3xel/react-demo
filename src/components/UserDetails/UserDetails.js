import { useSelector } from 'react-redux'
import React from 'react'

export default () => {

    const { userId } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.user)

    return (
        <div>
            User details for user ({userId}):
            { user && 
                <div>
                    { JSON.stringify(user) }
                </div>
            }
        </div>
        
    )
}