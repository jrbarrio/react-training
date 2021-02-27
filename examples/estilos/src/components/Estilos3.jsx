// Styled Components

import Button from "./ui/Button";
import ButtonWrapper from './ui/ButtonWrapper';

export default function Estilos3() {
    return (
        <div>
            <Button margin="10px">Pulsa</Button>
            <Button info bgColor="tomato">Pulsa Otro</Button>
            <ButtonWrapper page="ultima">
                <Button>Anterior</Button>
                <Button>Siguiente</Button>
            </ButtonWrapper>
        </div>
    );
}