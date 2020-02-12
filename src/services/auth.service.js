import config from 'react-global-configuration'
import { requestOptions } from '../helpers'
import { handleResponse } from '../helpers'

const login = (userName, password) => fetch(`${config.get('apiUrl')}/auth`, requestOptions.postRequest(JSON.stringify({ userName, password })))
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })

const logout = () => localStorage.removeItem('user')

export default { login, logout }