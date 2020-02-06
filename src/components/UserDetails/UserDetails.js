import { useSelector, useDispatch } from 'react-redux'
import { alertActions } from '../../actions'

const UserDetails = () => {

    const dispatch = useDispatch()

    const { userId } = useSelector(state => state.user)

    return (
        <div></div>
    )
}

export default UserDetails