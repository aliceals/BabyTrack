import React from 'react'
import { addEat } from '../actions'
import { connect } from 'react-redux'

export class Eat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            measurement: 'mls'
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
            this.props.dispatch(addEat(this.state))
            this.setState({ amount: '', measurement: 'mls' })
        }
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

                <h4>Past feeds</h4>

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