import './ProductItem.css';

export default function ProductItem({data}) {

    const { name, price, online, stock } = data;

    const onlineMsg = online ? 'Disponible en ligne uniquement' : 'Disponible en magasin';

    return (
        <div className='product'>
            <h3>{name}</h3>
            <p>Prix: {price} EUR</p>
            <p>En stock: {stock} - {onlineMsg}</p>
        </div>
    )
}