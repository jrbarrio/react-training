import { useState } from 'react';

function Message() {
    
    const [state, setState] = useState({
        message: 'Original message',
        text: 'Original text'
    });

    function updateMesage() {
        setState(state => ({ 
            ...state, 
            message: 'New message'
        }));
    }

    function updateText() {
        setState(state => ({ 
            ...state, 
            text: 'New text'
        }));
    }

    function handleClick() {
        updateMesage();
        setTimeout(updateText, 1000);
    }

    return (<div>
        <p>Message: { state.message }</p>
        <p>Text: { state.text }</p>
        <button onClick={ handleClick }>Change message</button>
    </div>);
}

export default Message;