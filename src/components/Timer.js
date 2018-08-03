import React, { Component } from 'react';
import '../App.css';

class Timer extends Component {

    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);

        this.state = {
            time: 0,
            start: 0,
            isRunning: false
        };
        const ms = require('pretty-ms');
    }

    startTimer() {
        this.setState({
           time: this.state.time,
           start: Date.now() - this.state.time,
           isRunning: true
        });
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
        console.log(this.state.isRunning);

    }

    pauseTimer(){
        this.setState({isRunning: false});
        console.log(this.state.isRunning);
        clearInterval(this.timer)
    }

    render() {
        let startTimer = (!this.state.isRunning) ?
            <div className='start' onClick={this.startTimer}>Start</div> : null;

        let pauseTimer = (this.state.isRunning) ?
            <div className='pause' onClick={this.pauseTimer}>Pause</div> : null;

        return (
            <div className="Timer">
                <header>
                    <h3>Timer:</h3>
                    <div className='timerElement'>{this.state.time}</div>
                    {startTimer}
                    {pauseTimer}
                </header>
            </div>
        );
    }
}

export default Timer;
