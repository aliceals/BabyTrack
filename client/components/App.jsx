import React from 'react'
import { fetchEats, fetchNappies, fetchSleeps } from '../actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import SignIn from './SignIn'
import { connect } from 'react-redux'

import Eat from './Eat'
import Sleep from './Sleep'
import Nappy from './Nappy'
import Nav from './Navbar'
import Register from './Register'
import Home from './Home'



export class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route exact path='/signin' component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path='/' component={Nav} />
                    <IfAuthenticated>
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
                            <Route exact path="/" component={Eat} />
                            <Route exact path="/" component={Sleep} />
                            <Route exact path="/" component={Nappy} />
                        </div>
                    </IfAuthenticated>
                    <IfNotAuthenticated>
                        <Route path="/" component={Home} />
                    </IfNotAuthenticated>
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