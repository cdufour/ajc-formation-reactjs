export default function ProductSearch(props) {

    const onKeyUp = (event) => {
        let value = event.target.value;
        console.log(value);

        // se servir de la valeur saisie pour impacter le state (products)
        props.onSearch(value);
    };


    return (
        <div>
            <input type="text" onKeyUp={ onKeyUp } />
        </div>
    )

}