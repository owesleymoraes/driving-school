import React from "react";
import * as Styled from "./styles";
import { FaCar } from "react-icons/fa";

interface FeatureProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Feature: React.FC<FeatureProps> = ({ title, children }) => {
  return (
    <Styled.ContainerFeature>
      <Styled.Icon>
        <FaCar />
      </Styled.Icon>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Children>{children}</Styled.Children>
    </Styled.ContainerFeature>
  );
};
