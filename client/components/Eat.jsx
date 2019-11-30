import React from 'react'
import { addEat } from '../actions'
import { connect } from 'react-redux'

export class Eat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.amount) {
            let amount = this.state.amount
            this.props.dispatch(addEat(amount))
            this.setState({ amount: '' })
        }
    }


    render() {
        return (
            <div className="eat">
                <h3>This is what your baby has eaten</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" className="form-control" name="amount" onChange={this.handleChange} value={this.state.amount} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

                <ul> {this.props.eat ? this.props.eat.map((eat, i) => {
                    return < li key={i}> Ate {eat.amount} {eat.measurement} at {eat.created_at}</li>
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