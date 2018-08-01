import React, {Component} from 'react';
import '../App.css';
import './Card';
import Card from "./Card";
import CardContainer from "./CardContainer";
import CreateNewTimer from "./CreateNewTimer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='componentName'>App</div>
                <CardContainer/>
                <CreateNewTimer/>
            </div>
        );
    }
}

export default App;
