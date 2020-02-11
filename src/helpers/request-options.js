import { authHeader } from './'

const getRequest = { method: 'GET', headers: authHeader() }

const postRequest = (body = '') => ({ method: 'POST', headers: { ...authHeader(), ...{ 'Content-Type': 'application/json' }}, body })

export default { getRequest, postRequest }