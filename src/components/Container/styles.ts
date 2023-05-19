import styled from "styled-components";
import { BreakPointSize, screenBreakPoint } from "../../BreakPointSize";

export const Container = styled.div`
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