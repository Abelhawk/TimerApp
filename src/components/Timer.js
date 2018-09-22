import React, {Component} from 'react';
import '../App.css';
import helpers from '../helpers.js';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.editTimer = this.editTimer.bind(this);
        this.deleteTimer = this.deleteTimer.bind(this);

        this.state = {
            time: 0,
            start: 0,
            isRunning: false,
            active: true,
            elapsed: this.props.elapsed
        };
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

    pauseTimer() {
        this.setState({isRunning: false});
        console.log(this.state.isRunning);
        clearInterval(this.timer)
    }

    editTimer(){
        this.setState({editFormOpen: true});
    }

    deleteTimer(){
        this.setState({active: false});
    }

    render() {
        let startTimer = (!this.state.isRunning) ?
            <div className='btn btn-success' onClick={this.startTimer}>Start</div> : null;

        let pauseTimer = (this.state.isRunning) ?
            <div className='btn btn-warning' onClick={this.pauseTimer}>Pause</div> : null;

        let deleteTimer = <div className='btn btn-danger float-right' onClick={this.deleteTimer}><i className="fas fa-trash"></i></div>;

        let editTimer = <div className='btn btn-info float-right' onClick={this.editTimer}><i className="fas fa-pen-square"></i></div>;

        if (this.state.active === true){
            return (
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <h5 className="card-title">{this.props.project}</h5>
                        {helpers.millisecondsToHuman(this.state.time)}
                        <div>
                            {startTimer}
                            {pauseTimer}
                            {deleteTimer}
                            {editTimer}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }
}


export default Timer;
