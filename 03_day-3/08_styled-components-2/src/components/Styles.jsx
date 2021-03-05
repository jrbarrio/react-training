// Styled Components

import Button from "./ui/Button";
import ButtonWrapper from './ui/ButtonWrapper';

export default function Styles() {
    return (
        <div>
            <Button margin="10px">Pulsa</Button>
            <Button info bgColor="tomato">Click other</Button>
            <ButtonWrapper page="first">
                <Button>Backward</Button>
                <Button>Forward</Button>
            </ButtonWrapper>
        </div>
    );
}