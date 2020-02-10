import config from 'react-global-configuration'
import { requestOptions } from '../helpers'
import { handleResponse } from '../helpers'

const getUserDetails = (userId) => fetch(`${config.get['apiUrl']}/user/${userId}`, requestOptions.getRequest).then(handleResponse)

export const userService = {
    getUserDetails
}