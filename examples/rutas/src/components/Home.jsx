import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Home(props) {

    useEffect(() => {
        console.log(props);
    }, [props]);

    let redirect = null;
    if (true) {
        redirect = <Redirect to="/567/reviews" />
    }

    return (
        <>
            {redirect}
            <p>Componente HOME</p>
        </>
    );
}