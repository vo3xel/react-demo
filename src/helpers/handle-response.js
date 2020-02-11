import { userService } from '../services'

export default (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.logout()
            }
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        return data
    });
}