import React, { Component } from 'react';
import '../App.css';
import Card from "./Card";

class CardContainer extends Component {
    render() {
        return (
            <div className='CardContainer'>
                <div className='componentName'>CardContainer</div>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default CardContainer;
