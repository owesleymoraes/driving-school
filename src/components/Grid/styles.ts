import styled from "styled-components";
import { screenBreakPoint, BreakPointSize } from "../../BreakPointSize";

export const ContainerGrid = styled.div<{ frOfGrid?: number }>`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  

  ${screenBreakPoint(BreakPointSize.sm)} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${screenBreakPoint(BreakPointSize.md)} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${screenBreakPoint(BreakPointSize.lg)} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${screenBreakPoint(BreakPointSize.xl)} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
