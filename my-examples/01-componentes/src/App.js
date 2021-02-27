import './App.css';
import './components/Saludo'
import Saludo from './components/Saludo';
import Despedida from "./components/Despedida";
import Card from './components/Card';
import Cronometro from './components/Cronometro';
import Animales from "./components/Animales";

function App() {
  return (
    <div className="App">
      <Saludo nombre="Jorge">Que pasa!</Saludo>   
      <Despedida nombre="Jorge">Adios!</Despedida>   
      <Card></Card>
      <Cronometro></Cronometro>
      <Animales></Animales>
    </div>
  );
}

export default App;
