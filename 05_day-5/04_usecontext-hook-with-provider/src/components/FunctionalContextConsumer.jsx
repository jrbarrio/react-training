import { useContext } from 'react';
import { useLoginContext, useLoginToggleContext } from './LoginProvider';

export default function FunctionalContextConsumer() {

    const user = useLoginContext();
    const changeLogin = useLoginToggleContext()

    return (
        <div>
            <h2>Functional Context Consumer</h2>
            { user && <p>Hello { user.nombre} - { user.email }</p> }
            <button onClick={ changeLogin }>Change Login</button>
        </div>
    );
}