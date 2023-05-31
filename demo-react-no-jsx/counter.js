// création d'un composant fonctionnel
// props est un objet
function Button(props) {
    return React.createElement("button", { onClick: props.handleClick }, props.name)
}


// création d'un composant de classe
class Counter extends React.Component {
    // propriété
    state = { num: 0 }

    // méthodes
    handleIncrement = () => {
        this.setState({ num: this.state.num + 1 })
    }

    handleDecrement = () => {
        if (this.state.num > 0) {
            this.setState({ num: this.state.num - 1 })
        }
    }

    // méthode (obligatoire) de rendu dans le DOM
    // render() {
    //     return React.createElement("div", {}, 
    //         React.createElement("button", { onClick: this.handleIncrement }, "Increment"),
    //         React.createElement("button", { onClick: this.handleDecrement }, "Decrement"),
    //         React.createElement("p", {}, this.state.num)
    //     )
    // }

    render() {
        return React.createElement("div", {}, 
            React.createElement(Button, { name: "Increment" , handleClick: this.handleIncrement }, null),
            React.createElement(Button, { name: "Decrement" , handleClick: this.handleDecrement }, null),
            React.createElement("p", {}, this.state.num)
        )
    }

}