import styled from "styled-components";

const resolveColor = (type: string) => {
  if (type === "orange") return "#ffc107";

  if (type === "black") return "#000000";

  if (type === "white") return "#ffffff";

  if (type === "red") return " #ff0000";
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
    background-color: #ffc107;
    /* background-color:( ${(props) => resolveColor(props.colorBar)}); */
    height: 8px;
    width: 70px;
  }
`;
