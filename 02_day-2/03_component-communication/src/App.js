import './App.css';
import Sum from './components/Sum'

function handleSumFinished(result) {
  console.log('Sum: ' + result);
}

function handleCountFinished(contador) {
  console.log('Counter: ' + contador);
}

function App() {
  return (
    <div className="App">
      <Sum numA={3} numB={4} sumFinished={ handleSumFinished } countFinished={ handleCountFinished }></Sum>
    </div>
  );
}

export default App;