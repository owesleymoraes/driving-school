import React from "react";
import * as Styled from "./styles";

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <Styled.HeaderContainer>
      <Styled.WrapperHeader>
        <Styled.TitleHeader>{title}</Styled.TitleHeader>
        {children}
        <Styled.ButtonHeader>MATRICULE-SE AGORA</Styled.ButtonHeader>
      </Styled.WrapperHeader>
    </Styled.HeaderContainer>
  );
};
