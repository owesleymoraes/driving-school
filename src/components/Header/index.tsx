import React from "react";
import * as Styled from "./styles";
import GlobalStyle from "../../styles/GlobalStyle";
import { Title } from "../Title";
import { Button } from "../Button";

interface HeaderProps {
  itemList: string[];
}

export const Header: React.FC<HeaderProps> = ({ itemList }) => {
  return (
    <>
      <GlobalStyle />
      <Styled.HeaderContainer>
        <Styled.WrapperHeader>
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
              {itemList.map((item, key) => {
                return (
                  <Styled.InfoHeaderList key={key}>
                    {item}
                  </Styled.InfoHeaderList>
                );
              })}
            </Styled.InfoHeaderContainer>
          </Styled.InfoHeaderContainer>
          <Button onClick={() => {}}>MATRICULE-SE AGORA</Button>
        </Styled.WrapperHeader>
      </Styled.HeaderContainer>
    </>
  );
};
