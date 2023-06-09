import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter';
import Demo from './Demo';


export default function App() {
    

    return (
        <Provider store={store}>
            <div>App</div>
            <Counter />
            <Demo />
        </Provider>
    )
}