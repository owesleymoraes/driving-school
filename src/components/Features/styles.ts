import styled from "styled-components";

export const ContainerFeature = styled.div`
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  & :hover {
    transition: 0.8s;
    background-color: #ffc107;

    > * {
      color: #ffff;
      transition: 1.8s;
      background-color: #ffc107;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  font-size: 32px;
  color: #ffc107;
  transition: 0.8s;
`;

export const Title = styled.h5`
  margin: 16px 0;
`;

export const Children = styled.div``;
