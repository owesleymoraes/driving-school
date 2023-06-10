import styled from "styled-components";
import { BreakPointSize, screenBreakPoint } from "../../BreakPointSize";

export const Content = styled.div<{ inverse?: boolean }>`
  padding: 40px 0;
  background-color: ${(props) => (props.inverse ? "#f2f2f2" : "transparent")};

  ${screenBreakPoint(BreakPointSize.md)} {
    padding: 80px 0;
  }
`;
