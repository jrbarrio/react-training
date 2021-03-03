import { useState } from 'react';

function Conditionals() {

    const [show, setShow] = useState(true); 

    function handleClick() {
        setShow(!show);
    }

    let content = null;
    if (show) {
        content = <p>Content 2</p>;
    }

    return (<div>
        <button onClick={ handleClick }>Mostrar/Ocultar</button>
        { show ? <p>Content 1</p> : null}
        { content }
        { show && <p>Content 3</p> }
        { (() => {
            if (show) {
                return <p>Content 4</p>
            }
        })()}
    </div>);
}

export default Conditionals;