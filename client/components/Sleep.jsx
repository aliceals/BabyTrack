import React from 'react'
import { connect } from 'react-redux'
import { addSleep, deleteSleep } from '../actions'
import ms from 'pretty-ms'
import moment from 'moment'
import { fetchSleeps } from '../actions'



export class Sleep extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 0,
            isOn: false,
            start: 0,
            endTime: 0
        }

    }

    componentDidMount() {
        this.props.dispatch(fetchSleeps())
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
        let time = ms(this.state.time)
        let timeDetails = {
            duration: time,
            time_started: moment(Date.now()).format('YYYY-MM-DD, h:mm:ss a')
        }
        this.props.dispatch(addSleep(timeDetails))
        this.setState({
            time: 0, start: 0
        })
    }

    handleDelete = (e) => {
        this.props.dispatch(deleteSleep(e.target.value))
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
                    <h4>Sleeps today</h4>
                    <ul>{this.props.sleep ? this.props.sleep.map((sleep, i) => {
                        if (sleep.time_started.slice(0, 10) == moment(Date.now()).format('YYYY-MM-DD'))
                            return <li key={i}>Slept {sleep.duration} woke at {sleep.time_started.slice(11, 17)}  <button value={sleep.sleep_id} onClick={this.handleDelete} className="btn-secondary">x</button></li>
                    }
                    ) : null} </ul>
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