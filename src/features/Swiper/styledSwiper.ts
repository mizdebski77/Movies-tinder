import styled, { css } from 'styled-components'
import { fadeIn, slideOutLeft, slideOutRight } from '../../common/animations';
import { theme } from '../../core/StyledComponents/theme';

export const Wrapper = styled.div`
    
`;

export const CardWrapper = styled.div`
    min-height: 800px;
    overflow: hidden;
`;

export const Card = styled.div<{ animation?: string }>`
    width: 100%;
    max-width: 460px;
    padding: 40px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
    background-color: ${theme.palette.mainColor};
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

export const CardTitle = styled.h2`
    font-size: 32px;
    color: ${theme.palette.secondColor};
    margin: 0;
`;

export const Rating = styled.span`
    font-size: 24px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const CardImage = styled.img`
    max-width: 280px;
    margin: 0 auto;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
    object-fit: cover;
    box-shadow: 0 0 10px white;
`;

export const FinalScreen = styled.div`
    text-align: center;
`;

export const Description = styled.p`
    font-size: 20px;
    color: white;
    text-align: justify;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Button = styled.button<{ accept?: boolean }>`
    border: none;
    border-radius: 100%;
    margin: 0 auto;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    color: white;
    background-color: ${({ accept }) => (accept ? "#4caf50" : "#f44336")};
    transition: 0.4s;

    &:hover {
        opacity: 0.7;
    }
`;

export const FinalText = styled.h3`
    font-size: 24px;
    font-weight: normal;
`;
