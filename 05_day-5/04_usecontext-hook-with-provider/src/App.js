import './App.css';
import FunctionalContextConsumer from './components/FunctionalContextConsumer';
import { LoginProvider } from './components/LoginProvider';

function App() {

  return (
    <LoginProvider>
      <FunctionalContextConsumer></FunctionalContextConsumer>
    </LoginProvider>
  );

}

export default App;
