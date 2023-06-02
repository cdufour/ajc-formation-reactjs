import { Component } from 'react';
import ProductItem from './ProductItem';
import ProductSearch from './ProductSearch';

const API = 'http://localhost:4000/products';

export default class ProductList extends Component {

    state = { 
        products: [],
        filteredProducts: []
    };

    constructor(props) {
        super(props);

        // this bind. Permet de "vérouiller" le contexte de résolution de l'opérateur this.
        // pour éviter qu'il référence un "mauvais" contexte.
        // pour plus d'info: https://github.com/getify/You-Dont-Know-JS
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        // requête ajax pour obtenir la liste de produits depuis le serveur back
        fetch(API)
            .then(res => res.json())
            .then(products => {
                // stockage des produits dans le state
                this.setState({ products, filteredProducts: products })
            })
    }

    onSearch(value) {
        console.log("Valeur saisie: " + value);

        if (value.length > 2) {
            let filteredProducts = this.state.products.filter(
                product => product.name.indexOf(value) !== -1);
            
            this.setState({ filteredProducts });
        } else {
            // spread operator ... (ES6) pour faire une copie par valeur et non par référence
            this.setState({ filteredProducts: [...this.state.products]});
        }
        
        
    }

    render() {

        // const numbers = [1, 2, 3, 4, 5];
        // const items = numbers.map(n => <p>{n*n}</p>);
        
        // const items = this.state.products.map(p => 
        //     <div>
        //         <h3>{ p.name }</h3>
        //         <p>Prix unitaire: {p.price} EUR</p>
        //     </div>
        // )

        const items = this.state.filteredProducts
            .map(product => <ProductItem data={product}  />)

        return (
            <>
                <ProductSearch onSearch={this.onSearch} />
                {items}
            </>
        )
    }

}