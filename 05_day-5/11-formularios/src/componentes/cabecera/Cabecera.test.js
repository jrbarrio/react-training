import { fireEvent, render } from '@testing-library/react';
import Cabecera from './Cabecera';

describe('<Cabecera />', () => {
    

    it('renderiza correctamente', () => {
        const { asFragment } = render(<Cabecera texto="adios"></Cabecera>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Introduce texto en la cabecera', () => {
        const { getByTestId, getByText } = render(<Cabecera texto="hola"></Cabecera>);
        expect(getByTestId('h1tag')).toHaveTextContent("hola");
        expect(getByText('hola')).toHaveClass("header");
    });

    it('Incrementa pulsando boton', () => {
        const { getByText, getByTestId } = render(<Cabecera texto="cabecera2"></Cabecera>)
        fireEvent.click(getByText('Incrementa'))
        expect(getByTestId('pCont')).toHaveTextContent("1");
    });
})