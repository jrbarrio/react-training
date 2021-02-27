import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';

//import Info from './components/Info';
// Vamos a cargarlo de manera lazy
import React, { Suspense } from 'react';

import Menu from './components/Menu';
import About from './components/About';
import Productos from './components/Productos';

// Esto hace que el bundle JS no cargue este componente si no se esta usando al cargar, sino que genere un script para recuperarlo
const Info = React.lazy(() => import('./components/Info'));


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home }></Route>
          <Route 
            path="/info" 
            render={ () => (
              <Suspense fallback={ <p>Cargando...</p> }>
                <Info></Info>
              </Suspense>
            )}>
          </Route>
          <Route path="/about" component={ About }></Route>
          <Redirect from="/sobremi" to="/about">Sobre mi</Redirect>
          <Route path="/about" render={ () => <div>ABOUT TAMBIEN</div> }></Route>
          <Route path="/productos/:productoId" component={ Productos }></Route>
          <Route path="/:productoId" component={ Productos }></Route>   
          <Route render={ () => <h1>Not Found</h1>}></Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
