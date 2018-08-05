import React, { Component } from 'react';
import '../App.css';
import Timer from "./Timer";

class TimerList extends Component {
    render() {
        return (
            <div className="Card">
                <Timer/>
            </div>
        );
    }
}

export default TimerList;
