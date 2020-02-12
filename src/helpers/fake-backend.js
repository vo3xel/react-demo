const warnFakeBackend = (url) => console.warn(`FAKE BACKEND: [${url}]`)

const users = [{ id: 1, userName: 'vo3xel', password: '123456', email: 'vo3xel@gmail.com', firstName: 'Michael', lastName: 'Spitzer'}]

export default () => {
    let realFetch = window.fetch
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/auth') && opts.method === 'POST') {
                    warnFakeBackend(url)
                    // get parameters from post request
                    let params = JSON.parse(opts.body)

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.userName === params.userName && user.password === params.password
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0]
                        let responseJson = {
                            id: user.id,
                            userName: user.userName,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzkzNTQ4ODMsImlhdCI6MTU3OTI2ODQ3OCwic3ViIjoyfQ.oCY-MSL9c9GSvt2Osf7Q-Z9XRA_OhgXjP_kETdwFps4'
                        }
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) })
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get fake user information
                if (url.endsWith('/user/1') && opts.method === 'GET') {
                    warnFakeBackend(url)
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users[0])) })
                    return
                }

                // pass through any requests not handled above
                warnFakeBackend(url + " - request NOT handled by fake-backend => passed through")
                realFetch(url, opts).then(response => resolve(response))

            }, 500)
        })
    }
}