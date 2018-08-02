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
            <button onClick={this.startTimer}>Start</button> : null;

        let pauseTimer = (this.state.isRunning) ?
            <button onClick={this.pauseTimer}>Pause</button> : null;

        return (
            <div className="Timer">
                <div className='componentName'>Timer</div>
                <header>
                    <div className='timerElement'>Timer: {this.state.time}</div>
                    {startTimer}
                    {pauseTimer}
                </header>
            </div>
        );
    }
}

export default Timer;
