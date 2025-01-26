export const MockQueryBackendData = () => {
    fetch('/games.json')
        .then(res => {
            if (res.status === 200)
                return res.json()
            else
                throw Error(`Unable to fetch ${res.status}`)
        })
        .then(data => {
            console.log('Json data: ', data)
        })
        .catch(error => {
        console.log(error)
    })
}