import { Component } from 'react';
import ProductItem from './ProductItem';

const API = 'http://localhost:4000/products';

export default class ProductList extends Component {

    state = { products: [] };

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // requête ajax pour obtenir la liste de produits depuis le serveur back
        fetch(API)
            .then(res => res.json())
            .then(products => {
                // stockage des produits dans le state
                this.setState({ products })
            })
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

        const items = this.state.products
            .map(product => <ProductItem data={product}  />)

        return (
            <>
                {items}
            </>
        )
    }

}