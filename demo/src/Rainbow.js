import { Component } from 'react';

const COLORS = ['green', 'red', 'blue', 'pink', 'orange', 'black'];

export default class Rainbow extends Component {

    state = { color: 'blue' };

    constructor(props) {
        super(props);
        console.log("*** constructor ***");
        //setInterval(() => console.log("ok"), 1000);
    }

    startAnim() {
        let intervalid = setInterval(
            () => { this.setState({ color: this.randomColor() }) },
            2000
        );
    }

    randomColor() {
        let index = Math.floor(Math.random() * COLORS.length);
        return COLORS[index];
    }

    componentDidMount() {
        // composant déjà rendu (render() déjà exécutée)
        console.log("*** componentDidMount ***");

        this.startAnim();
    }

    componentWillUnmount() {
        console.log("*** componentWillUnmount ***");
    }

    render() {
        console.log("*** render ***");

        const style = {
            width: 100,
            height: 100,
            backgroundColor: this.state.color
        };

        return (
            <div style={style}></div>
        )
    }
    
}

