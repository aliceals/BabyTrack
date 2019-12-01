import { combineReducers } from 'redux'

import eat from './eat'
import nappy from './nappy'
import sleep from './sleep'

const reducers = combineReducers({
    eat,
    nappy,
    sleep
})

export default reducers