import { apiAddEat, apiGetEats } from "../apis/eat"

export const SET_EAT = 'SET_EAT'

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