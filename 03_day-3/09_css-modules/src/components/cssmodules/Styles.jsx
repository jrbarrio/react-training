import classes from './Styles.module.css';
import { useState } from 'react';

export default function Styles() {

    const [active, setActive] = useState(true);

    let clases = [classes.paragraph];
    if (active) {
        clases.push(classes.green);
    }

    return (
        <div>
            <p className={`${classes.paragraph} red`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam.</p>
            <p className={clases.join(' ')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia.</p>
            <button onClick={() => setActive(!active)}>Modify state</button>
        </div>
    );
}