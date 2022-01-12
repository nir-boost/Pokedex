import styled from "styled-components"
import { COLORS } from "../../constants";


export const Button= styled.button`
display: flex;
justify-content: center;
align-item: center;
background-color: ${COLORS.yellow};
color: ${COLORS.grayLight};

`;

export const PokeCards= styled.div`
display: flex;
justify-content: space-around;
align-item: center;
background-color: ${COLORS.yellow};
flex-grow: 4;
flex-wrap: wrap;
`;


