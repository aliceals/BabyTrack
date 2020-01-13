import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const endPoint = '/api/v1/eat'

export function apiGetEats() {
    return request.get(endPoint)
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .then(res => res.body)
}

export function apiAddEat(eat) {
    return request.post(endPoint)
        .set({ 'Accept': 'application/json' })
        // .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send({
            amount: eat.amount,
            measurement: eat.measurement,
            created_at: eat.time_started
        })
        .then(res => res.body)
}

export function apiDeleteEats(eatId) {
    return request.post('/api/v1/eat/delete')
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send({ eatId: eatId })
        .then(res => res.body)
}