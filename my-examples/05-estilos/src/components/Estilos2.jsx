import { useState } from 'react';
import styled from 'styled-components';
import './Estilos2.css';

const StyledDiv = styled.div`
    background-color: red;
    padding: 50px;    
`

const StyledButton = styled.button`
    background-color: indigo;
    color: white;
    font-size: 24px;
`

export default function Estilos2() {

    const [cont, setCont] = useState(0);

    const clases = ['contador'];

    if (cont >= 0 && cont < 5) clases.push('bajo');
    if (cont >= 5 && cont < 10) clases.push('medio');
    if (cont >= 10) clases.push('alto');

    return (
        <StyledDiv>
            <p className={clases.join(' ')}>Contador: {cont}</p>
            <StyledButton onClick={() => setCont(cont + 1)}>Incrementa</StyledButton>
        </StyledDiv>
    );

}