import NavBar from './components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import background from './pattern.png';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{background: `url(${background})`}}>
        <NavBar />
        <div className='container'>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Dashboard />
            </Switch>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
