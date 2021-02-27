import { useState } from 'react';

// Asignación estilos a través de style con un objeto
// Modificamos ese objeto con los eventos de los diferentes input del JSX
export default function Estilos1() {

    const [estilosParrafo, setEstilosParrafo] = useState({
        backgroundColor: 'indigo',
        color: 'white'
    });

    function cambiaColor(pColor) {
        setEstilosParrafo({
            ...estilosParrafo,
            backgroundColor: pColor
        });
    }

    function cambiaColorTexto(event) {
        setEstilosParrafo({
            ...estilosParrafo,
            color: event.target.value
        });
    }

    function cambiaSizeTexto(event) {
        setEstilosParrafo({
            ...estilosParrafo,
            fontSize: event.target.value + 'px'
        });
    }

    return (
        <div>
            <div className="botones">
                <button onClick={() => cambiaColor('red')}>Rojo</button>
                <button onClick={() => cambiaColor('green')}>Verde</button>
                <button onClick={() => cambiaColor('yellow')}>Amarillo</button>
            </div>
            <div>
                <input
                    type="text"
                    value={estilosParrafo.color}
                    onChange={cambiaColorTexto} />
            </div>
            <div>
                <input
                    type="range"
                    min="12"
                    max="100"
                    step="1"
                    onChange={cambiaSizeTexto}
                />
            </div>
            <p style={estilosParrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, minima!</p>
        </div>
    );
}