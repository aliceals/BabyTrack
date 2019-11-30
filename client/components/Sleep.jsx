import React from 'react'
import { connect } from 'react-redux'
import { addSleep } from '../actions'
import ms from 'pretty-ms'

export class Sleep extends React.Component {
    constructor(props) {
        super(props)

        let today = new Date()
        let time = today.toLocaleTimeString()

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
        //dispatch this.state.time  
        this.props.dispatch(addSleep(this.state.time))

    }

    render() {
        let start = (this.state.start == 0) ? <button type="button" className="btn btn-dark" onClick={this.startTimer}>start</button> : null
        let stop = (this.state.time == 0 || !this.state.isOn) ? null : <button type="button" className="btn btn-danger" onClick={this.stopTimer}>stop</button>
        let resume = (this.state.time == 0 || this.state.isOn) ? null : <button type="button" className="btn btn-success" onClick={this.startTimer}>resume</button>
        let reset = (this.state.time == 0 || this.state.isOn) ? null : <button type="button" className="btn btn-success" onClick={this.resetTimer}>reset</button>
        let submit = (this.state.time == 0 || this.state.isOn) ? null : <button type="button" className="btn btn-success" onClick={this.submitTime}>Submit</button>


        return (
            <div className="sleep">
                <h3>This is how your baby has slept</h3>
                {ms(this.state.time)}
                {start}
                {stop}
                {resume}
                {reset}
                {submit}
            </div>

        )
    }
}




export default connect()(Sleep)