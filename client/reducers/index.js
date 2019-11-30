import { combineReducers } from 'redux'

import eat from './eat'
import nappy from './nappy'

const reducers = combineReducers({
    eat,
    nappy
})

export default reducers