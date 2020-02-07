import { useSelector, useDispatch, useEffect } from 'react-redux'
import { alertActions } from '../../actions'
import { userActions } from '../../actions'

const UserDetails = () => {

    const dispatch = useDispatch()

    const { userId } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(userActions.setUserId(1))
    })

    return (
        <div>User details for user ({userId}):</div>
    )
}

export default UserDetails