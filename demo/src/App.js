import './App.css';
import Counter from './Counter'
import Lorem from './exos/Lorem';
import Rainbow from './Rainbow';

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
  const style1 = { 
    color: 'orange', 
    'text-decoration': 'underline',
    marginTop: '40px',
    'margin-bottom': '50px'
  };


  return (
    <div>
      <h1 style={style1}>{ title }</h1>
      <h2>{ subtitle }</h2>
      <h2>Autre titre</h2>

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

      {/* composant Lorem ici */}
      <Lorem />
      <Lorem limit={10} />
      <Lorem limit={50} />

      <Rainbow />

    </div>
  );
}

export default App;
