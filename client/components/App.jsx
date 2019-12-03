import React from 'react'
import { fetchEats, fetchNappies, fetchSleeps } from '../actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './SignIn'
import { connect } from 'react-redux'

import Eat from './Eat'
import Sleep from './Sleep'
import Nappy from './Nappy'
import Nav from './Navbar'
import Register from './Register'

export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchEats())
        this.props.dispatch(fetchNappies())
        this.props.dispatch(fetchSleeps())
    }


    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route exact path='/signin' component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path='/' component={Nav} />
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
                </Router>
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