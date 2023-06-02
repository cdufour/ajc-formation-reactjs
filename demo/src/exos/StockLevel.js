export default function StockLevel({stock}) {

    let color = 'red';
    let height = 10;

    if (stock >= 11 && stock < 51) {
        color = 'orange';
        height = 20;
    } else if (stock >= 51) {
        color = 'green';
        height = 30;
    }
    
    return(
        <>
            <svg width="10" height={height}>
                <rect width="10" height={height} fill={color} />
            </svg>
            <span style={{color}}>{stock}</span>
        </>

    )

}