import styled from "styled-components";
import img from "../../assets/car.jpg";

const yellowCustom = "#ffc107";

export const HeaderContainer = styled.div<{ image: any }>`
  color: #fff;
  padding: 100px 0;
  background: url(${(props) => props.image}), rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
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
    color: ${yellowCustom};
  }
`;
