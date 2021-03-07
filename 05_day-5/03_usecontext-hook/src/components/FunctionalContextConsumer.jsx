import { useContext } from 'react';
import UserContext from './UserContext';

export default function FunctionalContextConsumer() {

    // A value is being injected through this context
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Functional Context Consumer</h1>
            { user && <p>Hello { user.name} - { user.email }</p> }
        </div>
    );
}