import CSS from "csstype";

export const HomeStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const PokeCards: CSS.Properties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexGrow: 4,
  flexWrap: "wrap",
};

const style = { HomeStyle, PokeCards };

export default { style };

