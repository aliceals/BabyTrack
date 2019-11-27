import React from 'react'
import { fetchEats } from '../actions'

import { connect } from 'react-redux'

import Eat from './Eat'

export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchEats())
    }


    render() {
        return (
            <Eat />
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        eat: reduxState.eat
    }
}

export default connect(mapStateToProps)(App)