import { useSelector } from 'react-redux'

export default function Demo() {
    const count = useSelector((state) => state.counter.value)

    return (<p>Count: {count}</p>)
}