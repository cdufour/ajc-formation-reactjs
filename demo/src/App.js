import './App.css';
import Counter from './Counter'

// composants fonctionnels
function Simple() {
  return <p>Simple composant fonctionnel</p>
}

function Simple2(props) {
  return <p>Formation: { props.propA } - Niveau: { props.propB }</p>
}

function Simple3(props) {
  //return <p>Formation: { props.training } - Niveau: { props.level }</p>

  // destructuration d'objet (ES6)
  const { training, level } = props;

  return <p>Formation: { training } - Niveau: { level }</p>
}

function Simple4(props) {
  if (props.isOk) {
    return <p>Ok, tout va bien</p>
  } else {
    return <p>Ouille ! ça va mal</p>
  }
}

function Simple5(props) {
  return <p>Résultat: { props.result }</p>
}

function App() {

  const title = "Formation ReactJs";
  const subtitle = "Initiation";


  return (
    <div>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>

      <Simple />
      <Simple2 propA="JavaScript" propB="débutant" />
      <Simple2 propA="ReactJs" propB="débutant" />
      <Simple3 training="Angular" level="expert" />
      <Simple4 />
      <Simple4 isOk={false} />
      <Simple4 isOk={true} />
      <Simple5 result="111 * 6" />
      <Simple5 result={111 * 6} />
      <Counter initialValue={0} />
      <Counter initialValue={5} />
    </div>
  );
}

export default App;
