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
    render() {
        return React.createElement("div", {}, 
            React.createElement("button", { onClick: this.handleIncrement }, "Increment"),
            React.createElement("button", { onClick: this.handleDecrement }, "Decrement"),
            React.createElement("p", {}, this.state.num)
        )
    }

}