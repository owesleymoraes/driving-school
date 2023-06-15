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
  hasButton?: boolean;
  nameButton?: string;
  imageBackground?: React.ReactNode | React.ReactNode[];
}

export const Header: React.FC<HeaderProps> = ({
  children,
  nameButton = "",
  titlePrimary,
  titleSecondary,
  titlePrincipal,
  hasButton = false,
  imageBackground
}) => {
  return (
    <Styled.HeaderContainer image = {imageBackground}>
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
        {hasButton && (
          <Button
            width={240}
            borderRadius={8}
            backgroundColor="#ffc107"
            onClick={() => {}}
          >
            {nameButton}
          </Button>
        )}
      </Container>
    </Styled.HeaderContainer>
  );
};
