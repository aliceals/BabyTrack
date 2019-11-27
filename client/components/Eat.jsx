import React from 'react'
import { fetchEats } from '../actions'
import { connect } from 'react-redux'

const Eat = (props) => {
    return (
        <React.Fragment>
            <button onClick={() => props.dispatch(fetchEats())}>Get eat details</button>
            <ul> {props.eat ? props.eat.map(eat => {
                return < li > Ate {eat.amount} {eat.measurement} at {eat.created_at}</li>
            })

                : null
            }</ul>
        </React.Fragment >

    )
}


function mapStateToProps(reduxState) {
    return {
        eat: reduxState.eat
    }
}

export default connect(mapStateToProps)(Eat)