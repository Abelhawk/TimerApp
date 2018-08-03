import React, { Component } from 'react';
import '../App.css';
import EditTimer from "./EditTimer";
import Timer from "./Timer";

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <Timer/>
            </div>
        );
    }
}

export default Card;
