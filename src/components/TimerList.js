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
                active={timer.active}
            />
        ));
        return (
            <div>
                {timers}
            </div>
        );
    }
}

export default TimerList;
