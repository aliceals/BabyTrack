import request from 'superagent'

const endPoint = '/api/v1/nappy'

export function apiAddNappy(nappy) {
    return request.post(endPoint)
        .send({
            type: nappy
        })
        .then(res => res.body)
}

export function apiGetNappies() {
    return request.get(endPoint)
        .then(res => res.body)
}


export function apiDeleteNappy(nappyId) {
    return request.post('/api/v1/nappy/delete')
        .send({ nappyId: nappyId })
        .then(res => res.body)
}
