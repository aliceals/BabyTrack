import { apiAddEat, apiGetEats, apiDeleteEats } from "../apis/eat"
import { apiAddNappy, apiGetNappies, apiDeleteNappy } from "../apis/nappy"
import { apiAddSleep, apiGetSleeps, apiDeleteSleeps } from '../apis/sleep'

export const SET_EAT = 'SET_EAT'
export const SET_NAPPY = 'SET_NAPPY'
export const SET_SLEEPS = 'SET_SLEEPS'

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

export function addSleep(sleep) {
    return dispatch => {
        apiAddSleep(sleep)
            .then(() => {
                dispatch(fetchSleeps())
            })
    }
}

export function fetchSleeps() {
    return dispatch => {
        apiGetSleeps()
            .then(sleeps => {
                dispatch(setSleeps(sleeps))
            })
    }
}

export function setSleeps(sleeps) {
    return {
        type: SET_SLEEPS,
        sleeps: sleeps
    }
}

export function deleteEat(eatId) {
    return dispatch => {
        apiDeleteEats(eatId)
            .then(() => {
                dispatch(fetchEats())
            })
    }
}

export function deleteSleep(sleepId) {
    return dispatch => {
        apiDeleteSleeps(sleepId)
            .then(() => {
                dispatch(fetchSleeps())
            })
    }
}

export function deleteNappy(nappyId) {
    return dispatch => {
        apiDeleteNappy(nappyId)
            .then(() => {
                dispatch(fetchNappies())
            })
    }
}