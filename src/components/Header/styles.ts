import styled from "styled-components";
import img from "../../assets/car.jpg";
import { screenBreakPoint, BreakPointSize } from "../../BreakPointSize";

export const HeaderContainer = styled.div`
  color: #fff;
  padding: 100px 0;
  background: url(${img}), rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

export const WrapperHeader = styled.div`
  max-width: 100%;
  padding: 0 8px;

  ${screenBreakPoint(BreakPointSize.sm)} {
    padding: 0 16px;
  }

  ${screenBreakPoint(BreakPointSize.xl)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const TitleHeader = styled.h1`
  font-size: 32px;
  letter-spacing: 2px;
`;

export const InfoHeaderContainer = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const InfoHeaderList = styled.li`
  font-size: 20px;
  font-weight: 300px;

  &:before {
    content: "\\2713\\0020";
  }
`;

export const ButtonHeader = styled.button``;
