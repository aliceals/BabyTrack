import React from 'react'
import { addEat, deleteEat } from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import { fetchEats } from '../actions'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export class Eat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            measurement: 'mls',
            time_started: ''
        }

    }


    componentDidMount() {
        this.props.dispatch(fetchEats())
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let eatDetails = {
            amount: this.state.amount,
            measurement: this.state.measurement,
            time_started: moment(Date.now()).format('YYYY-MM-DD, h:mm:ss a')
        }

        if (this.state.amount) {
            this.props.dispatch(addEat(eatDetails))
            this.setState({ amount: '', measurement: 'mls' })
        }

    }

    handleDelete = (e) => {
        this.props.dispatch(deleteEat(e.target.value))
    }

    render() {


        return (
            // <IfAuthenticated>
            <div className="eat">
                <div className="newEat">
                    <h3> Eat 🍼</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" className="form-control" name="amount" onChange={this.handleChange} value={this.state.amount} placeholder="eg 150ml" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="measurement">Measurement</label>
                            <input type="text" className="form-control" name="measurement" onChange={this.handleChange} value={this.state.measurement} />
                        </div>
                        <div className="submitEat">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>

                <h4>Feeds today</h4>

                <ul> {this.props.eat ? this.props.eat.map((eat, i) => {
                    if (eat.created_at.slice(0, 10) == moment(Date.now()).format('YYYY-MM-DD')) {
                        return < li key={i}> Ate {eat.amount} {eat.measurement} at {eat.created_at.slice(11, 17)} <button value={eat.eat_id} onClick={this.handleDelete} className="btn-secondary">x</button> </li>
                    }
                })
                    : null
                }</ul>
            </div >
            // </IfAuthenticated>
        )
    }
}


function mapStateToProps(reduxState) {
    return {
        eat: reduxState.eat
    }
}

export default connect(mapStateToProps)(Eat)