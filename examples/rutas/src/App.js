import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import Menu from './components/Menu';
import About from './components/About';
import Productos from './components/Productos';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Redirect from="/sobremi" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/:productoId" component={Productos} />
        </Switch>
        <Route path="/" exact render={() => <h2>Fuera</h2>} />
      </div>
    </BrowserRouter>
  );
}

export default App;