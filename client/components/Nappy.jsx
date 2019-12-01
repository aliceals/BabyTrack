import React from 'react'
import { connect } from 'react-redux'
import { addNappy } from '../actions'

export class Nappy extends React.Component {
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
        this.setState({
            type: ""
        })
    }

    render() {
        return (
            <>
                <div className="nappy">
                    <div className="nappyNew">
                        <h3>Nappy 💩</h3>
                        <button type="button" value="Poo" className="btn btn-primary" onClick={this.handleChange}>Poo</button>
                        <button type="button" value="Wee" className="btn btn-warning" onClick={this.handleChange}>Wee</button>
                        <button type="button" value="Both" className="btn btn-info" onClick={this.handleChange}>Both</button>
                    </div>
                    <div className="submit">
                        <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div className="nappyPast">
                        <h4>Past nappies</h4>
                        <ul>
                            {this.props.nappy ? this.props.nappy.map((nappy, i) => {
                                return <li key={i}>{nappy.type} {nappy.time}</li>
                            }) : null}
                        </ul>
                    </div>
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

export default connect(mapStateToProps)(Nappy)