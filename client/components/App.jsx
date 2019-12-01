import React from 'react'
import { fetchEats, fetchNappies, fetchSleeps } from '../actions'

import { connect } from 'react-redux'

import Eat from './Eat'
import Sleep from './Sleep'
import Nappy from './Nappy'

export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchEats())
        this.props.dispatch(fetchNappies())
        this.props.dispatch(fetchSleeps())
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className='jumbotron'>
                        <div className="containerforJumbo">
                            <h1 className="display-4">Baby Tracker</h1>
                            <p className="summary">Record your babies sleep, nappies and eating habits</p>
                        </div>
                        <img className="mainImage" src="/images/baby2.png" />
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