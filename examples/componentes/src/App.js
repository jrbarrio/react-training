import './App.css';

import Saludo from './components/Saludo';
import Despedida from './components/Despedida';
import Card from './components/Card';
import Cronometro from './components/Cronometro';
import Animales from './components/Animales';

function App() {
  return (
    <div className="App">
      <Animales />
      <Cronometro />
      <Saludo nombre="Mario">
        Qué pasa
      </Saludo>
      <Despedida nombre="Lucía" />
      <Card />
    </div>
  );
}

export default App;
