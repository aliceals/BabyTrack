import { apiAddEat, apiGetEats } from "../apis/eat"
import { apiAddNappy, apiGetNappies } from "../apis/nappy"

export const SET_EAT = 'SET_EAT'
export const SET_NAPPY = 'SET_NAPPY'

export function setEats(eats) {
    return {
        type: SET_EAT,
        eats
    }
}

export function fetchEats() {
    return dispatch => {
        apiGetEats()
            .then(eats => {
                dispatch(setEats(eats))
            })
    }
}

export function addEat(eat) {
    return dispatch => {
        apiAddEat(eat)
            .then(() => {
                dispatch(fetchEats())
            })
    }
}

export function setNappies(nappies) {
    return {
        type: SET_NAPPY,
        nappies: nappies
    }
}

export function fetchNappies() {
    return dispatch => {
        apiGetNappies()
            .then(nappies => {
                dispatch(setNappies(nappies))
            })
    }
}
export function addNappy(nappy) {
    return dispatch => {
        apiAddNappy(nappy)
            .then(() => {
                dispatch(fetchNappies())
            })
    }
}