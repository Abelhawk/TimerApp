/*
eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
no-undef, jsx-a11y/label-has-for, react/jsx-first-prop-new-line
*/

import React, {Component} from 'react';
import '../App.css';
import CardContainer from "./CardContainer";

class App extends Component {
    state = {
        timers: [
            {
                title: 'Trying to get this app to work',
                project: 'Homework',
                id: 'x', //for now
                elapsed: 5456099,
                since: Date.now(),
            },
            {
                title: 'Chewing gum',
                project: 'Killing time',
                id: 'y',
                elapsed: 999988887,
                since: null,
            },

        ],
    };

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
           timers: this.state.timers.concat(t),
        });
    };

    render() {
        return (
            <div className="App">
                <CardContainer/>
            </div>
        );
    }
}

export default App;
