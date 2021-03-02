import './App.css';
import Problema1 from "./componentes/Problema1";
import Problema2 from "./componentes/Problema2";
import Suma from "./componentes/Suma";
import Formulario from './componentes/Formulario'
import CicloVida from './componentes/CicloVida';
import Condicionales from './componentes/Condicionales';
import Listas from './componentes/Listas';
import Efectos from './componentes/Efectos';
import Users from './componentes/Users';
import Scroll from './componentes/Scroll';

function App() {


  function handleSumaFinalizada(resultado) {
    console.log('Suma finalizada: ' + resultado);
  }

  function handleCuentaTerminada(contador) {
    console.log('Contador: ' + contador);
  }

  return (
    <div className="App">
      <Problema1></Problema1>
      <Problema2></Problema2>
      {/* <Suma numA={3} numB={4} sumaFinalizada={ handleSumaFinalizada } cuentaTerminada={ handleCuentaTerminada }></Suma> */}
      {/* <Formulario></Formulario> */}
      {/* <CicloVida></CicloVida> */}
      {/* <Condicionales></Condicionales> */}
      {/* <Listas></Listas> */}
      {/* <Efectos></Efectos> */}
      {/* <Users></Users> */}
      {/* <Scroll></Scroll> */}
    </div>
  );
}

export default App;
