import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
    return (
        <ul className="menu">
            <NavLink to="/" exact activeStyle={{ fontSize: '40px' }}>
                <li>Home</li>
            </NavLink>
            <NavLink to={{
                pathname: '/info',
                search: '?page=2&order=name',
                hash: '#main'
            }}>
                <li>Info</li>
            </NavLink>
            <NavLink to="/about">
                <li>About</li>
            </NavLink>
            <NavLink to="/productos/45">
                <li>Producto 45</li>
            </NavLink>
            <NavLink to="/productos/47">
                <li>Producto 47</li>
            </NavLink>
        </ul>
    );
}