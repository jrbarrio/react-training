import { useEffect } from "react";
import { Route } from 'react-router-dom';
import Reviews from "./Reviews";

export default function Productos(props) {

    useEffect(() => {
        console.log(props.match);

    }, [props.match.url])

    return (<div>
        <p>Componente Productos</p>
        <Route path={props.match.url + '/reviews'} render={() => <Reviews id="PRUEBA" />} />
        {/* <Route path={props.match.url + '/related'} component={Related} /> */}
    </div>);
}

// /productos/ID/reviews

// routes = [
//     {
//         path: 'productos/:productoId', component: '', children: [
//             { path: 'reviews', component: '' }
//         ]
//     }
// ]

// this.activatedRoute.params.subscribe(params => {
//     console.log(params);
// })

// this.activatedRoute.parent.params.subscribe(params => {
//     console.log(params);
// })