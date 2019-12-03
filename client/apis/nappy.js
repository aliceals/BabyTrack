import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'


const endPoint = '/api/v1/nappy'

export function apiAddNappy(nappy) {
    return request.post(endPoint)
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send({
            type: nappy
        })
        .then(res => res.body)
}

export function apiGetNappies() {
    return request.get(endPoint)
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .then(res => res.body)
}


export function apiDeleteNappy(nappyId) {
    return request.post('/api/v1/nappy/delete')
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send({ nappyId: nappyId })
        .then(res => res.body)
}
