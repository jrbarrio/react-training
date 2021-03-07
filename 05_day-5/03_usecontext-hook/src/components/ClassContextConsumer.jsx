import { Component } from 'react';
import UserContext from './UserContext';

export default class ClassContextConsumer extends Component {

    render() {
        return (
            <UserContext.Consumer >
                { user => (
                    <div>
                        <h1>Class Context Consumer</h1>
                        { user && <p>Hello { user.name} - { user.email }</p>  }
                    </div>                    
                )}
            </UserContext.Consumer>
        );
    }
}