import React from "react";
import { ErrorSvg } from "../../components/ImageSvg/pageError";

import * as Styled from "./styles";

export const Error: React.FC = () => {
  return (
    <Styled.ContainerErrorPage>
      <h4>Ops! Essa página está na lua.</h4>
      <ErrorSvg />
    </Styled.ContainerErrorPage>
  );
};
