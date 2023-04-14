import styled from "styled-components";

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
    height: 8px;
    width: 70px;
  }
`;
