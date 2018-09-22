import React, { Component } from 'react';
import '../App.css';
import Timer from "./Timer";
import EditableTimer from "./EditableTimer";

class TimerList extends React.Component {
    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                since={timer.since}
            />
        ));
        return (
            <div className="card">
                <Timer/>
                {timers}
            </div>
        );
    }
}

export default TimerList;
