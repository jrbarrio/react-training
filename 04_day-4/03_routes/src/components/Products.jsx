import { useEffect } from "react";
import { Route } from 'react-router-dom';
import Reviews from "./Reviews";

export default function Products(props) {

    console.log(props.match.params);

    useEffect(() => {
        console.log(props.match);
    }, [props.match.params.productoId]);

    return (
        <div>
            <p>PRODUCTS Component</p>
            <Route path={ props.match.url + '/reviews' } component={ Reviews }></Route>
        </div>
    );
}

// Route can be used anywhere in the BrowserRouter hierarchy