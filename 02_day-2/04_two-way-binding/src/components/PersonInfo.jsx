import React from 'react';

function PersonInfo() {

    const [user, setUser] = React.useState({
        name: '',
        surname: '',
        age: 0
    });

    function handleChange(event, field) {
        setUser({
            ...user,
            [field]: event.target.value
        });
    }

    function changeData() {
        setUser({
            name: 'Jorge',
            surname: 'Roldan',
            age: 42
        });
    }

    return (
        <div>
            <p>{ user.name }</p>
            <p>{ user.surname }</p>
            <p>{ user.age }</p>

            <label>Name</label>
            <input type="text" value={ user.name } onChange={ event => handleChange(event, 'name') }></input>
            <label>Surname</label>
            <input type="text" value={ user.surname } onChange={ event => handleChange(event, 'surname') }></input>
            <label>Age</label>
            <input type="text" value={ user.age } onChange={ event => handleChange(event, 'age') }></input>
            <button onClick={ changeData }>Change data</button>
        </div>
    );
}

export default PersonInfo;