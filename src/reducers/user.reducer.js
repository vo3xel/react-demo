import { userConstants } from '../constants'

const user = (state = {}, action) => {
    switch (action.type) {
    case userConstants.GET_USER_DETAILS_REQUEST:
        return {
            loading: true
        };
    case userConstants.GET_USER_DETAILS_SUCCESS:
        return {
            items: action.user
        };
    case userConstants.GET_USER_DETAILS_FAILURE:
        return { 
            error: action.error
        };
    default:
        return state
    }
}

export default user