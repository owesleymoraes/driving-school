import React from "react";
import * as Styled from "./styles";
import GlobalStyle from "../../GlobalStyle";

interface HeaderProps {
  title: string;
  itemList: string[];
}

export const Header: React.FC<HeaderProps> = ({ title, itemList }) => {
  return (
    <>
    <GlobalStyle />
    <Styled.HeaderContainer>
      <Styled.WrapperHeader>
        <Styled.TitleHeader>{title}</Styled.TitleHeader>
        <Styled.InfoHeaderContainer>
          <Styled.InfoHeaderContainer>
            {itemList.map((item, key) => {
              return (
                <Styled.InfoHeaderList key={key}>{item}</Styled.InfoHeaderList>
              );
            })}
          </Styled.InfoHeaderContainer>
        </Styled.InfoHeaderContainer>
        <Styled.ButtonHeader>MATRICULE-SE AGORA</Styled.ButtonHeader>
      </Styled.WrapperHeader>
    </Styled.HeaderContainer>
    </>
  );
};
