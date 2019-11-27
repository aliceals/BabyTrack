import request from 'superagent'

const endPoint = '/api/v1/eat'

export function apiGetEats() {
    return request.get(endPoint)
        .then(res => res.body)
}

export function apiAddEat(eat) {
    return request.post(endPoint)
        .then({
            amount: eat.amount,
            measurement: eat.measurement
        })
        .then(res => res.body)
}