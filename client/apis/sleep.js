import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'


const endPoint = '/api/v1/sleep'

export function apiAddSleep(sleep) {
    return request.post(endPoint)
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send({
            duration: sleep.duration,
            time_started: sleep.time_started
        })
        .then(res => res.body)
}


export function apiGetSleeps() {
    return request.get(endPoint)
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .then(res => res.body)
}


export function apiDeleteSleeps(sleepId) {
    return request.post('/api/v1/sleep/delete')
        .set({ 'Accept': 'application/json' })
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send({ sleepId: sleepId })
        .then(res => res.body)
}