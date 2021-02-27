import { useState, useEffect } from 'react';

function Scroll() {

    const [scrollActual, setScrollActual] = useState(0);

    useEffect(() => {
        function onScroll() {
            console.log('onScroll');
            setScrollActual(window.scrollY);
        }
        window.addEventListener('scroll', onScroll);
        return function cleanUp() {
            window.removeEventListener('scroll', onScroll);
        }
    });

    return (
        <p style={{
            backgroundColor: 'green',
            color: 'black',
            position: 'fixed'
        }}>Scroll: {scrollActual}</p>
    );

}

export default Scroll;