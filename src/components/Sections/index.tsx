import React from "react";
import { Container } from "../Container";

import * as Styled from "./styles";

interface SectionsProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Sections: React.FC<SectionsProps> = ({ children }) => {
  return (
    <Container>
      <Styled.Content>{children}</Styled.Content>
    </Container>
  );
};
