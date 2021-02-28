import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

//import { simpleAction } from './actions/simpleActions';

function App(props) {
  const simpleAction = (event) => {
    console.log("function call");
    //props.simpleAction();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button onClick={() => simpleAction()}>Test redux action</button>
      </header>
      <pre>
        {
          JSON.stringify(props)
        }
      </pre>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  //simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
