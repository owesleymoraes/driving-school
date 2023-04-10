import styled from "styled-components";

const yellowCustom = "#ffc107";

export const Title = styled.h1`
  position: relative;
  width: 100%;
  letter-spacing: 2px;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  strong {
    color: ${yellowCustom};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    background-color: ${yellowCustom};
    height: 8px;
    width: 70px;
  }
`;
