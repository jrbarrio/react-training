import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
    padding: 20px 40px;
    font-size: 24px;
    border: none;
    background-color: gray;
    color: white;
    margin: ${({ margin }) => margin || '5px'};
    ${({ info }) =>
        info &&
        css`
            background-color: ${props => props.bgColor};
            border-radius: 10px;
        `
    }

    &:hover{
        color: black;
        background-color: paleturquoise;
    }
`

// const OtherButton = styled(ButtonStyled)`
//     font-size: 50px;
// `
/* <OtherButton info={info} bgColor={bgColor}>{children}</OtherButton> */

export default function Button({ info, bgColor, margin, children }) {
    return (
        <ButtonStyled
            info={info}
            bgColor={bgColor}
            margin={margin}
        >
            {children}
        </ButtonStyled>
    );
}