import React from "react";
import * as Styled from "./styles";

interface FeatureProps {
  title: string;
  icon?: React.ReactNode
  children?: React.ReactNode | React.ReactNode[];
}

export const Feature: React.FC<FeatureProps> = ({icon, title, children }) => {
  return (
    <Styled.ContainerFeature>
      <Styled.IconWrapper>
        <Styled.Icon>
         {icon}
        </Styled.Icon>
      </Styled.IconWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Children>{children}</Styled.Children>
    </Styled.ContainerFeature>
  );
};
