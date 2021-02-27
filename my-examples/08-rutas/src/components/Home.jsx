import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Home(props) {

    useEffect(() => {
        console.log(props);
    }, [ props ]);

    let redirect = null;
    if (true) {
        redirect = <Redirect to="/54545/reviews"></Redirect>
    }

    return (
        <>
            { redirect }
            <p>Componente HOME</p>
        </>
    );
}