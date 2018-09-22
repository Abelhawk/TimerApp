import React, {Component} from 'react';
import '../App.css';
import TimerForm from "./TimerForm";

//For awl in tents and porpoises, this is "ToggleableTimerForm."

class CardContainer extends React.Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({isOpen: true});
    };

    handleFormClose = () => {
        this.setState({isOpen: false});
    };

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({isOpen: false});
    };


    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <button className="btn btn-primary" onClick={this.handleFormOpen}
                >
                    New Timer
                </button>
            )
        }
    }
}

export default CardContainer;
