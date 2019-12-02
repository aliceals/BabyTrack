import request from 'superagent'

const endPoint = '/api/v1/eat'

export function apiGetEats() {
    return request.get(endPoint)
        .then(res => res.body)
}

export function apiAddEat(eat) {
    return request.post(endPoint)
        .send({
            amount: eat.amount,
            measurement: eat.measurement,
            created_at: eat.dateTime
        })
        .then(res => res.body)
}
