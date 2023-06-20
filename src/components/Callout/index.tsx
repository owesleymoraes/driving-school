import React from "react";
import * as Styled from "./styles";

interface CalloutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const Callout: React.FC<CalloutProps> = ({ children }) => {
  return <Styled.ContainerCallout>
    {children}
  </Styled.ContainerCallout>;
};
