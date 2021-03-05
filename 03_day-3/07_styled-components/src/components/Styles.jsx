import { useState } from 'react';
import styled from 'styled-components';
import './Styles.css';

const StyledDiv = styled.div`
    background-color: red;
    padding: 50px;
`

const StyledButton = styled.button`
    background-color: indigo;
    color: white;
    font-size: 24px;
`

export default function Styles() {

    const [counter, setCounter] = useState(0);

    const clases = ['counter'];

    if (counter >= 0 && counter < 5) clases.push('low');
    if (counter >= 5 && counter < 10) clases.push('medium');
    if (counter >= 10) clases.push('high');

    return (
        <StyledDiv>
            <p className={clases.join(' ')}>Counter: {counter}</p>
            <StyledButton onClick={() => setCounter(counter + 1)}>Increment</StyledButton>
        </StyledDiv>
    );

}