import request from 'superagent'

const endPoint = '/api/v1/sleep'

export function apiAddSleep(sleep) {
    return request.post(endPoint)
        .send({
            sleep: sleep
        })
        .then(res => res.body)
}




