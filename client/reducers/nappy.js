import { SET_NAPPY } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAPPY:
            return action.nappies
        default:
            return state
    }
}

export default reducer