import config from 'react-global-configuration'
import { requestOptions } from '../helpers'
import { handleResponse } from '../helpers'

const getUserDetails = (userId) => fetch(`${config.apiUrl}/user/${userId}`, requestOptions).then(handleResponse)

export const userService = {
    getUserDetails
}