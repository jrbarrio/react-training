import { useState } from 'react';

// Assigning styles through an object
// The object is modified with different inputs from JSX
export default function Styles() {

    const [paragraphStyles, setParagraphStyles] = useState({
        backgroundColor: 'indigo',
        color: 'white'
    });

    function changeColor(color) {
        setParagraphStyles({
            ...paragraphStyles,
            backgroundColor: color
        });
    }

    function changeTextColor(event) {
        setParagraphStyles({
            ...paragraphStyles,
            color: event.target.value
        });
    }

    function changeTextSize(event) {
        setParagraphStyles({
            ...paragraphStyles,
            fontSize: event.target.value + 'px'
        });
    }

    return (
        <div>
            <div className="butons">
                <button onClick={() => changeColor('red')}>Red</button>
                <button onClick={() => changeColor('green')}>Green</button>
                <button onClick={() => changeColor('yellow')}>Yellow</button>
            </div>
            <div>
                <input
                    type="text"
                    value={paragraphStyles.color}
                    onChange={changeTextColor} />
            </div>
            <div>
                <input
                    type="range"
                    min="12"
                    max="100"
                    step="1"
                    onChange={changeTextSize}
                />
            </div>
            <p style={paragraphStyles}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, minima!</p>
        </div>
    );
}