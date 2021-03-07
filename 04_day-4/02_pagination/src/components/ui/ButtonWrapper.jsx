import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ page }) => {
        if (page === 'first') return 'flex-end';
        else if (page === 'last') return 'flex-start';
        else return 'space-between';
    }}
`;

export default ButtonWrapper;