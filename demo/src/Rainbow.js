import { Component } from 'react';

const COLORS = ['green', 'red', 'blue', 'pink', 'orange', 'black'];

export default class Rainbow extends Component {

    state = { color: 'blue', intervalId: null };

    constructor(props) {
        super(props);
        console.log("*** constructor ***");
        //setInterval(() => console.log("ok"), 1000);
    }

    startAnim() {
        let intervalId = setInterval(
            () => { this.setState({ color: this.randomColor() }) },
            2000
        );
        this.setState({ intervalId });
    }

    stopAnim() {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
    }

    toggleAnim() {
        if (!this.state.intervalId) {
            this.startAnim();
        } else {
            this.stopAnim();
        }
    }

    randomColor() {
        let index = Math.floor(Math.random() * COLORS.length);
        return COLORS[index];
    }

    componentDidMount() {
        // composant déjà rendu (render() déjà exécutée)
        console.log("*** componentDidMount ***");

        //this.startAnim();
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

        let btnText = "On"; // texte par défaut

        // changement du texte si animation en cours d'exécution
        if (this.state.intervalId) {
            btnText = "Off";
        }
        

        return (
            <>
                <div style={style}></div>
                <button onClick={ () => this.toggleAnim() }>{btnText}</button>
            </>
        )
    }
    
}

