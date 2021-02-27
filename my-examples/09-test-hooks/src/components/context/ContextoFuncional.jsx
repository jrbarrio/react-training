import { useContext } from 'react';
import { useLoginContext, useLoginToggleContext } from './LoginProvider';
// import UserContext from './UserContext';

export default function ContextoFuncional() {

    // // Devuelve el valor que estamos inyectando a traves de este context
    // const user = useContext(UserContext);

    const user = useLoginContext();
    const cambiaLogin = useLoginToggleContext()

    return (
        <div>
            <h2>Contexto Funcional</h2>
            { user && <p>Saludos { user.nombre} - { user.email }</p> }
            <button onClick={ cambiaLogin }>Cambia Login</button>
        </div>
    );
}