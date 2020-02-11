import { userConstants } from '../constants'
import { userService } from '../services'
import { history } from '../helpers'
import { alertActions } from './'

const getUserDetails = (userId) => {
    
    const request = (userId) => ({ type: userConstants.GET_USER_DETAILS_REQUEST, userId })
    const success = (user) => ({ type: userConstants.GET_USER_DETAILS_SUCCESS, user })
    const failure = (error) => ({ type: userConstants.GET_USER_DETAILS_FAILURE, error })

    return dispatch => {
        dispatch(request(userId))
        userService.getUserDetails(userId)
            .then(
                user => { 
                    dispatch(success(user))
                    history.push('/')
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }
}

const setUserId = (userId) => ({ type: userConstants.SET_USER_ID, userId })

export default { getUserDetails, setUserId }