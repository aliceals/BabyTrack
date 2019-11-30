import React from 'react'
import { connect } from 'react-redux'
import { addNappy } from '../actions'

export class Poo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.type) {
            this.props.dispatch(addNappy(this.state))
        }
    }

    render() {
        return (
            <>
                <div className="poo">
                    <h3>This is your babies bowel movements</h3>
                    <button type="button" value="poo" className="btn btn-primary" onClick={this.handleChange}>Poo</button>
                    <button type="button" value="wee" className="btn btn-warning" onClick={this.handleChange}>Wee</button>
                    <button type="button" value="both" className="btn btn-info" onClick={this.handleChange}>Both</button>
                    <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>

                    <h4>Past nappies</h4>
                    <ul>
                        {this.props.nappy ? this.props.nappy.map((nappy, i) => {
                            return <li key={i}>{nappy.type} {nappy.time}</li>
                        }) : null}
                    </ul>
                </div>
            </>
        )
    }
}


function mapStateToProps(reduxState) {
    return {
        nappy: reduxState.nappy
    }
}

export default connect(mapStateToProps)(Poo)