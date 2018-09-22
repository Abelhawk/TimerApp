import React, { Component } from 'react';
import '../App.css';
import Timer from "./Timer";
import TimerForm from "./TimerForm";

class EditableTimer extends React.Component {
    constructor(props) {
        super(props);
        this.onEditFormOpen = this.onEditFormOpen.bind(this);

        this.state = {
            title: this.props.title,
            project: this.props.project,
            time: 0,
            start: 0,
            isRunning: false,
            active: true,
            elapsed: this.props.elapsed,
            editFormOpen: false,

        };
    }

    handleFormClose = () => {
        this.setState({isOpen: false});
    };

    handleFormSubmit = (timer) => {
        this.setState({project: timer.project, title: timer.title});
        console.log(this.state);
        this.setState({editFormOpen: false});
    };

    onEditFormOpen() {
        this.setState({editFormOpen: true})
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.state.title}
                    project={this.state.project}
                    active={this.props.active}
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}
                    title={this.state.title}
                    project={this.state.project}
                    elapsed={this.props.elapsed}
                    since={this.props.since}
                    active={this.props.active}
                    onEditFormOpen={this.onEditFormOpen}
                />
            );
        }
    }
}

export default EditableTimer;