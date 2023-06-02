import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams
 } from 'react-router-dom';

import Products from '../products/ProductList';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/topics/4">Topics (id: 4)</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/topics/:topicId" element={<Topics />} />
                </Routes>


            </div>
        </Router>
    )
}

// composants fonctionnels supplémentaires
function About() {
    return (<h2>About</h2>);
}

function Users() {
    return (<h2>Users</h2>);
}

function Topics() {
    const { topicId } = useParams();
    return (<h2>Topics - ID: {topicId}</h2>);
}