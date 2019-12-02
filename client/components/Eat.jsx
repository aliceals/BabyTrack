import React from 'react'
import { addEat, deleteEat } from '../actions'
import { connect } from 'react-redux'
import { moment } from 'moment'

export class Eat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            measurement: 'mls',
            dateTime: ''
        }
    }


    handleChange = (e) => {
        console.log(new Date())
        this.setState({
            [e.target.name]: e.target.value,
            date: new Date()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.amount) {
            this.props.dispatch(addEat(this.state))
            this.setState({ amount: '', measurement: 'mls' })
        }

    }

    handleDelete = (e) => {
        console.log(e.target.value)
        this.props.dispatch(deleteEat(e.target.value))
    }

    render() {


        return (
            <div className="eat">
                <div className="newEat">
                    <h3> Eat 🍼</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" className="form-control" name="amount" onChange={this.handleChange} value={this.state.amount} />
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
                    if (eat.created_at.slice(0, 10) == new Date().toISOString().slice(0, 10)) {
                        return < li key={i}> Ate {eat.amount} {eat.measurement} at {eat.created_at.slice(11, 16)} <button value={eat.eat_id} onClick={this.handleDelete} className="btn-secondary">x</button> </li>
                    }
                })
                    : null
                }</ul>
            </div >
        )
    }
}


function mapStateToProps(reduxState) {
    return {
        eat: reduxState.eat
    }
}

export default connect(mapStateToProps)(Eat)