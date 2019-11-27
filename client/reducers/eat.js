import { SET_EAT } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EAT:
            return action.eats
        default:
            return state
    }
}

export default reducer