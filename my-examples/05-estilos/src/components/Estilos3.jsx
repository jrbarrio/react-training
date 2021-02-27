import Button from "./ui/Button";
import ButtonWrapper from "./ui/ButtonWrapper";

export default function Estilos3() {
    return (
        <div>
            <Button>Pulsa</Button>
            <Button info bgColor="tomato" margin="50px">Pulsa Otro</Button>
            <Button bgColor="tomato">Pulsa Otro Mas</Button>
            <Button info margin="30px">Pulsa Otro Mas todavia</Button>

            <ButtonWrapper page='media'>
                <Button>Anterior</Button>
                <Button>Siguiente</Button>
            </ButtonWrapper>
        </div>
    );
}