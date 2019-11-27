import React from 'react'
import { fetchEats } from '../actions'
import { connect } from 'react-redux'

export class Eat extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h3>This is what your baby has eaten</h3>
                <ul> {this.props.eat ? this.props.eat.map(eat => {
                    return < li > Ate {eat.amount} {eat.measurement} at {eat.created_at}</li>
                })

                    : null
                }</ul>
            </React.Fragment >

        )
    }
}


function mapStateToProps(reduxState) {
    return {
        eat: reduxState.eat
    }
}

export default connect(mapStateToProps)(Eat)