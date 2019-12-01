import { SET_SLEEPS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SLEEPS:
            return action.sleeps
        default:
            return state
    }
}

export default reducer