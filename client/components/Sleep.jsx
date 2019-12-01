import React from 'react'
import { connect } from 'react-redux'
import { addSleep } from '../actions'
import ms from 'pretty-ms'

export class Sleep extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 0,
            isOn: false,
            start: 0,
        }
    }

    startTimer = () => {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1)
    }

    stopTimer = () => {
        this.setState({ isOn: false, finished: true })
        clearInterval(this.timer)
    }

    resetTimer = () => {
        this.setState({ time: 0, isOn: false, start: 0 })
    }

    submitTime = () => {
        this.props.dispatch(addSleep(this.state.time))
        this.setState({
            time: 0, start: 0
        })

    }

    render() {
        let start = (this.state.start == 0) ? <button type="button" className="btn btn-dark" onClick={this.startTimer}>Start</button> : null
        let stop = (this.state.time == 0 || !this.state.isOn) ? null : <button type="button" className="btn btn-danger" onClick={this.stopTimer}>Stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ? null : <button type="button" className="btn btn-success" onClick={this.startTimer}>Resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ? null : <button type="button" className="btn btn-success" onClick={this.resetTimer}>Reset</button>
        let submit = (this.state.time == 0 || this.state.isOn) ? null : <button type="button" className="btn btn-success" onClick={this.submitTime}>Submit</button>


        return (
            <div className="sleep">
                <div className="newSleep">
                    <h3>Sleep 😴 </h3>

                </div>
                <div className="timer">
                    <p>{ms(this.state.time)}</p>
                </div>
                <div className="sleepButtons">
                    {start}
                    {stop}
                    {resume}
                    {reset}
                    {submit}

                </div>
                <div className="pastSleep">
                    <h4>Past sleeps</h4>
                    <ul>{this.props.sleep ? this.props.sleep.map((sleep, i) => {
                        return <li key={i}>Slept {sleep.duration} woke at {sleep.time_started}</li>
                    }) : null} </ul>
                </div>
            </div>

        )
    }
}

function mapStateToProps(reduxState) {
    return {
        sleep: reduxState.sleep
    }
}


export default connect(mapStateToProps)(Sleep)