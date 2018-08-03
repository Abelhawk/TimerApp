import React, {Component} from 'react';
import '../App.css';
import Card from "./Card";
import TimerForm from "./TimerForm";
import CreateNewTimer from "./CreateNewTimer";

//For all in tents and porpoises, this is "ToggleableTimerForm."

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
                <CreateNewTimer/>
            )
        }
    }
}

export default CardContainer;
