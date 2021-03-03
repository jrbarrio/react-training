import { useState, useEffect} from 'react';

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
    // Passing an empty array as a second array, the hook only is only executed on the first render
    // as on the next renders there is no dependency to compare against

    return (<div>
        <h1>User list:</h1>
        <ul>
            { users.map(user => (
                <li key={ user.id }>{ user.name }</li>
            ))}
        </ul>
    </div>);
}

export default Users;