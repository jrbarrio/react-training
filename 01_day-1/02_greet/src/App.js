import './App.css';
import Goodbye from './components/Goodbye';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Jorge">
        <p>Nice to see you!</p>
      </Hello>
      <Goodbye name="Jorge"></Goodbye>
    </div>
  );
}

export default App;
