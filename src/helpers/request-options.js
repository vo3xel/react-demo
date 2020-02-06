import { authHeader } from '../helpers'

const getRequest = {
    method: 'GET',
    headers: authHeader()
}

export const requestOptions = {
    getRequest
}