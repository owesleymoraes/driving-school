import styled from "styled-components";
import { BreakPointSize, screenBreakPoint } from "../../../../BreakPointSize";

export const ContainerCalloutBody = styled.div`
  display: flex;
  h6,
  p {
    margin: 0 0 8px;
  }
`;

export const WrapperButton = styled.div`
  margin-top: 16px;
`;

export const ContainerCalloutMedia = styled.div`
  width: 30%;
  display: none;

  ${screenBreakPoint(BreakPointSize.md)} {
    display: flex;
  }

  svg {
    color: #ffc107;
    max-width: 380px;
    height: 100%;
    width: 100%;
  }
`;
