import React from "react";
import { Container } from "../Container";

import * as Styled from "./styles";

interface SectionsProps {
  children: React.ReactNode | React.ReactNode[];
  inverse?: boolean;
}

export const Sections: React.FC<SectionsProps> = ({
  children,
  inverse = false,
}) => {
  return (
    <Styled.Content inverse={inverse}>
      <Container>{children}</Container>
    </Styled.Content>
  );
};
