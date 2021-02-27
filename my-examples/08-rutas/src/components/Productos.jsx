import { useEffect } from "react";
import { Route } from 'react-router-dom';
import Reviews from "./Reviews";

export default function Productos(props) {

    console.log(props.match.params);

    useEffect(() => {
        console.log(props.match);
    }, [props.match.params.productoId]);

    return (
        <div>
            <p>Componente PRODUCTOS</p>
            <Route path={ props.match.url + '/reviews' } component={ Reviews }></Route>
        </div>
    );
}

// El Route se puede usar en culquier punto dentro de la jerarquia el BrowserRouter