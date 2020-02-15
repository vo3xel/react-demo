import { userConstants } from '../constants'

export default (state = {}, action) => {
    switch (action.type) {
    case userConstants.GET_USER_DETAILS_REQUEST:
        return { ...state, loading: true }

    case userConstants.GET_USER_DETAILS_SUCCESS:
        return { ...state, user: action.user, loading: false }

    case userConstants.GET_USER_DETAILS_FAILURE:
        return { ...state, error: action.error, loading: false }

    case userConstants.SET_USER_ID:
        return { ...state, userId: action.userId, loading: false }
        
    default:
        return state
    }
}