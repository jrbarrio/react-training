import logo from './logo.svg';
import './App.css';
import Dobles from './components/Dobles';
import Contador from './components/Contador';
import UserContext from './components/context/UserContext'
import ContextoFuncional from './components/context/ContextoFuncional';
import ContextoClase from './components/context/ContextoClase';
import { useState } from 'react';
import { LoginProvider } from './components/context/LoginProvider';
import Formulario from './components/reducer/Formulario';

function App() {

  // function cambiaLogin() {
  //   if(user) {
  //     setUser(null);
  //   } else {
  //     setUser({
  //       nombre: 'Jorge',
  //       email: 'jorge.roldan@gmail.com'
  //     });
  //   }
  // }

  // return (
  //   <div className="App">
  //     <Dobles></Dobles>
  //     <Contador></Contador>     
  //   </div>
  // );

  // return (
  //   <UserContext.Provider value={ user }>
  //     <button onClick={ cambiaLogin }>Cambia Login</button>
  //   <ContextoFuncional></ContextoFuncional>
  //   <ContextoClase></ContextoClase>
  // </UserContext.Provider>
  // );

  // return (
  //   <LoginProvider>
  //   <ContextoFuncional></ContextoFuncional>
  //   <ContextoClase></ContextoClase>
  // </LoginProvider>
  // );

  return <Formulario></Formulario>
}

export default App;
