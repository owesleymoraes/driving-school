import styled from "styled-components";

const changeColorBar = (color: string) => {
  if (color === "red") return "#ff0000";
  if (color === "white") return "#ffffff";
  if (color === "black") return "#000000";
  if (color === "orange") return "#ffc107";
};

export const BottomBar = styled.div<{ colorBar: string }>`
  position: relative;
  width: 100%;
  letter-spacing: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    background-color: ${({ colorBar }) => changeColorBar(colorBar)};
    height: 8px;
    width: 70px;
  }
`;
