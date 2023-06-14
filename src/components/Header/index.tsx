import React from "react";
import { Title } from "../Title";
import { Button } from "../Button";
import { Container } from "../Container";

import * as Styled from "./styles";

interface HeaderProps {
  children?: string[];
  titlePrincipal?: string;
  titlePrimary?: string;
  titleSecondary?: string;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  titlePrincipal,
  titlePrimary,
  titleSecondary,
}) => {
  return (
    <Styled.HeaderContainer>
      <Container>
        <Title
          description={
            <span>
              {titlePrincipal} {titlePrimary && <strong>{titlePrimary}</strong>}
              <br /> {titleSecondary}
            </span>
          }
        />
        <Styled.InfoHeaderContainer>
          <Styled.InfoHeaderContainer>
            {children &&
              children.map((item, key) => {
                return (
                  <Styled.InfoHeaderList key={key}>
                    {item}
                  </Styled.InfoHeaderList>
                );
              })}
          </Styled.InfoHeaderContainer>
        </Styled.InfoHeaderContainer>
        <Button
          width={240}
          borderRadius={8}
          backgroundColor="#ffc107"
          onClick={() => {}}
        >
          MATRICULE-SE AGORA
        </Button>
      </Container>
    </Styled.HeaderContainer>
  );
};
