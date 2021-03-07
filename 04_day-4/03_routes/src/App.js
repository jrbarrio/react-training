import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';

import Menu from './components/Menu';
import About from './components/About';
import Products from './components/Products';

import React, { Suspense } from 'react';

// import Info from './components/Info';
// Lazy loading Info component instead
// The component won't be mounted on loading th JS bundle, but a script to recover it on demand will be generated
const Info = React.lazy(() => import('./components/Info'));

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home }></Route>
          {/* <Route path="/info" component={ Info }></Route> */}
          <Route 
            path="/info" 
            render={ (props) => (
              <Suspense fallback={ <p>Loading...</p> }>
                <Info {...props}></Info>
              </Suspense>
            )}>
          </Route>
          <Route path="/about" component={ About }></Route>
          <Redirect from="/aboutme" to="/about">About me</Redirect>
          <Route path="/about" render={ () => <div>ABOUT IS ALSO RENDERED</div> }></Route>
          <Route path="/productos/:productoId" component={ Products }></Route>
          <Route path="/:productoId" component={ Products }></Route>   
          <Route render={ () => <h1>Not Found</h1>}></Route>  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
