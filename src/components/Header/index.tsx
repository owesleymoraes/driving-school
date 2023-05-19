import React from "react";
import { Title } from "../Title";
import { Button } from "../Button";
import { Container } from "../Container";

import * as Styled from "./styles";

interface HeaderProps {
  children: string[];
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Styled.HeaderContainer>
      <Container>
        <Title
          description={
            <span>
              Ganhe sua <strong>Liberdade</strong>
              <br /> para ir e vir
            </span>
          }
        />
        <Styled.InfoHeaderContainer>
          <Styled.InfoHeaderContainer>
            {children.map((item, key) => {
              return (
                <Styled.InfoHeaderList key={key}>{item}</Styled.InfoHeaderList>
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
