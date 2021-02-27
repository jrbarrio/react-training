import { useState, useEffect} from 'react';


// https://jsonplaceholder.typicode.com/users
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUSers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setUsers(json)
        };
        getUSers();
    }, []);

    return (<div>
        <h1>Lista de usuarios</h1>
        <ul>
            { users.map(user => (
                <li key={ user.id }>{ user.name }</li>
            ))}
        </ul>
    </div>);
}

export default Users;