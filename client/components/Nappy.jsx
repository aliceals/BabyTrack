import React from 'react'
import { connect } from 'react-redux'
import { addNappy, deleteNappy } from '../actions'
import moment from 'moment'

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
        let nappyDetails = {
            type: this.state.type,
            time: moment(Date.now()).format('YYYY-MM-DD, h:mm:ss a')
        }
        if (this.state.type) {
            this.props.dispatch(addNappy(nappyDetails))
        }
        this.setState({
            type: ""
        })
    }

    handleDelete = (e) => {
        this.props.dispatch(deleteNappy(e.target.value))
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
                                return <li key={i}>{nappy.type} at {nappy.time.slice(11, 16)} <button value={nappy.nappy_id} onClick={this.handleDelete} className="btn-secondary">x</button></li>
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