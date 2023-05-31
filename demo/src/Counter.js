import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: props.initialValue }
    }

    handleClick() {
        if (this.state.counter >= 10) {
            this.setState({ counter: 0 })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }
    }

    render() {
        return (
            <div>
                <h3>Counter Component</h3>
                <button onClick={ () => this.handleClick() }>Increment</button>
                <span>{ this.state.counter }</span>
            </div>
        );
    }

}

export default Counter