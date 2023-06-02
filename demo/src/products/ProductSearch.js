import { createRef } from 'react';

export default function ProductSearch(props) {

    const onKeyUp = (event) => {
        let value = event.target.value;
        console.log(value);

        // se servir de la valeur saisie pour impacter le state (products)
        props.onSearch(value);
    };

    const onClick = () => {
        // communication ascendante, on notifie le parent quant à l'événement
        props.onClear();

        // possiblité d'effacement du champ en JS pur - mauvaise pratique
        //document.getElementById("search").value = "";

        // à la façon react par utilisation d'une référence
        ref.current.value = "";
    }

    const ref = createRef();

    return (
        <div>
            <input ref={ref} id="search" type="text" onKeyUp={ onKeyUp } />
            <button onClick={ onClick }>X</button>
        </div>
    )

}