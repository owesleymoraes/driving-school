import styled from "styled-components";

export const ContainerCallout = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 3px solid #ffc107;
  border-radius: 4px;
  padding: 16px;

  > * {
    border-left: none;
    border-radius: none;
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;
