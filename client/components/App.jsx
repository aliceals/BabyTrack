import React from 'react'
import { fetchEats, fetchNappies } from '../actions'

import { connect } from 'react-redux'

import Eat from './Eat'
import Sleep from './Sleep'
import Nappy from './Nappy'

export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchEats())
        this.props.dispatch(fetchNappies())
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className='jumbotron'>
                        <h1 className="display-4">Baby Tracker</h1>
                    </div>
                </div>
                <div className="container">
                    <Eat />
                    <Sleep />
                    <Nappy />
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        eat: reduxState.eat
    }
}

export default connect(mapStateToProps)(App)