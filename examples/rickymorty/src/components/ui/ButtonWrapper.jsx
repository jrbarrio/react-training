import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ page }) => {
        if (page === 'primera') return 'flex-end';
        else if (page === 'ultima') return 'flex-start';
        else return 'space-between';
    }}
`;

export default ButtonWrapper;