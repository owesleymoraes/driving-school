import styled from "styled-components";
import img from "../../assets/car.jpg";

export const HeaderContainer = styled.div`
  color: #fff;
  background: url(${img}), rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

export const WrapperHeader = styled.div``;

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
