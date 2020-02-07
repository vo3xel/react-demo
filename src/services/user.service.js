import config from 'react-global-configuration'
import { requestOptions } from '../helpers'
import { handleResponse } from '../helpers'

const getUserDetails = (userId) => {
    fetch(`http://localhost:5000/user/${userId}`, requestOptions.getRequest).then(handleResponse)
    //fetch(`${config.apiUrl}/user/${userId}`, requestOptions.getRequest).then(handleResponse)
}

export const userService = {
    getUserDetails
}