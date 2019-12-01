import request from 'superagent'

const endPoint = '/api/v1/sleep'

export function apiAddSleep(sleep) {
    return request.post(endPoint)
        .send({
            duration: sleep
        })
        .then(res => res.body)
}


export function apiGetSleeps() {
    return request.get(endPoint)
        .then(res => res.body)
}

