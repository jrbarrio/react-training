import './App.css';
import { useState } from 'react';
import UserContext from './components/UserContext'
import FunctionalContextConsumer from './components/FunctionalContextConsumer';
import ClassContextConsumer from './components/ClassContextConsumer';

function App() {

  const [ user, setUser] = useState(null);

  function changeLogin() {
    if(user) {
      setUser(null);
    } else {
      setUser({
        name: 'Jorge',
        email: 'jorgeXXXX@gmail.com'
      });
    }
  }

  return (
    <UserContext.Provider value={ user }>
      <button onClick={ changeLogin }>Change Login</button>
      <FunctionalContextConsumer></FunctionalContextConsumer>
      <ClassContextConsumer></ClassContextConsumer>
    </UserContext.Provider>
  );

}

export default App;
