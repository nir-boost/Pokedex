import CSS from "csstype";
import styled from "styled-components"
import { COLORS } from "../../constants";


export const Home= styled.div`
display: flex;
flex-direction:  column;
justify-content: center;
align-item: center;
`;

export const PokeCards= styled.div`
display: flex;
justify-content: space-around;
align-item: center;
background-color: ${COLORS.yellow};
flex-grow: 4;
flex-wrap: wrap;

`;
export const HomeStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const PokeCasrds: CSS.Properties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexGrow: 4,
  flexWrap: "wrap",
};


