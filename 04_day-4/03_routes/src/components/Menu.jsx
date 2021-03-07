import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css'

export default function Menu() {
    return (
        <div>
            <ul className={ classes.menu }>
                <NavLink to="/" exact><li>Home</li></NavLink>
                <NavLink to={{
                    pathname: '/info',
                    search: '?page=2&order=name',
                    hash: '#main'
                }}><li>Info</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/productos/45"><li>Product 45</li></NavLink>
                <NavLink to="/productos/47"><li>Product 47</li></NavLink>
            </ul>
        </div>
    );
}