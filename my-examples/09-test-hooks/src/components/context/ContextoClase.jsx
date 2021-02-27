import { Component } from 'react';
import UserContext from './UserContext';

export default class ContextoClase extends Component {

    render() {
        return (
            <UserContext.Consumer >
                { user => (
                    <div>
                        <h1>Contexto Clase</h1>
                        { user && <p>Bienvenido { user.nombre }</p> }
                    </div>                    
                )}
            </UserContext.Consumer>
        );
    }
}