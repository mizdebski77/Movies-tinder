import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    
`;

export const CardWrapper = styled.div`
    min-height: 960px;
    overflow: hidden;
`;

export const Card = styled.div<{ animation?: string }>`
    width: 100%;
    max-width: 420px;
    padding: 40px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 20px;
    animation: ${fadeIn} 0.5s forwards;

    ${({ animation }) =>
        animation &&
        css`
            animation: ${animation === "left" ? slideOutLeft : slideOutRight}
                0.5s forwards;
        `}
`;