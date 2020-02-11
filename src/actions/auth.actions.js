import { authConstants } from '../constants'
import { userConstants } from '../constants'
import { authService } from '../services'
import { history } from '../helpers'
import { alertActions } from './'

const login = (username, password) => {

    const request = (user) => ({ type: authConstants.LOGIN_REQUEST, user })
    const success = (user) => ({ type: authConstants.LOGIN_SUCCESS, user })
    const failure = (error) => ({ type: authConstants.LOGIN_FAILURE, error })

    return dispatch => {
        dispatch(request({ username }))

        authService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user))
                    history.push('/')
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };
}

const logout = () => {
    authService.logout();
    return { type: userConstants.LOGOUT }
}

export default { login, logout }