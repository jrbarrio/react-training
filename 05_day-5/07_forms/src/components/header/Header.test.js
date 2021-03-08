import { fireEvent, render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
    
    it('renders correctly', () => {
        const { asFragment } = render(<Header texto="bye"></Header>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Introduce text in header', () => {
        const { getByTestId, getByText } = render(<Header texto="hello"></Header>);
        expect(getByTestId('h1tag')).toHaveTextContent("hello");
        expect(getByText('hello')).toHaveClass("header");
    });

    it('Increment clicking button', () => {
        const { getByText, getByTestId } = render(<Header texto="another header"></Header>)
        fireEvent.click(getByText('Increment'))
        expect(getByTestId('counter')).toHaveTextContent("1");
    });
})