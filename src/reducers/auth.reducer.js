import { authConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
    switch (action.type) {
        
    case authConstants.LOGIN_REQUEST:
        return {
            loggingIn: true,
        }

    case authConstants.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            userId: action.user.id
        }

    case authConstants.LOGIN_FAILURE:
        return { }

    default:
        return state
    }
}