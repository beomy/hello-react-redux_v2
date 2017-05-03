import React, { Component } from 'react';
import { increment, decrement } from '../actions';

class Button extends Component {
    constructor(props) {
        super(props);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement(event) {
        this.props.store.dispatch(increment())
    }

    onDecrement(event) {
        this.props.store.dispatch(decrement())
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default Button;