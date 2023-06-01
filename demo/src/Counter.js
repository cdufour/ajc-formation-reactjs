import React from 'react';
import './Counter.css';

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

        //var color = 'pink';

        return (
            <div>
                {/* <h2 style={{color}}>Counter Component</h2> */}
                <h2 className="Counter-h2">Counter Component</h2>
                <button onClick={ () => this.handleClick() }>Increment</button>
                <span>{ this.state.counter }</span>
            </div>
        );
    }

}

export default Counter