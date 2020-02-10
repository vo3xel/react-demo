const warnFakeBackend = (url) => console.warn(`FAKE BACKEND: [${url}]`)

export const configureFakeBackend = () => {
    let realFetch = window.fetch
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // get fake user information
                if (url.endsWith('/user/1') && opts.method === 'GET') {
                    console.log("HIT")
                    let user = { id: 1, email: 'vo3xel@gmail.com', firstName: 'Michael', lastName: 'Spitzer'}
                    warnFakeBackend(url)
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(user)) })
                    return
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response))

            }, 500)
        })
    }
}