import request from 'superagent'

const endPoint = '/api/v1/eat'

export function apiGetEats() {
    return request.get(endPoint)
        .then(res => res.body)
}

export function apiAddEat(eat) {
    console.log(eat)
    return request.post(endPoint)
        .send({
            amount: eat.amount,
            measurement: eat.measurement,
            created_at: eat.time_started
        })
        .then(res => res.body)
}

export function apiDeleteEats(eatId) {
    return request.post('/api/v1/eat/delete')
        .send({ eatId: eatId })
        .then(res => res.body)
}