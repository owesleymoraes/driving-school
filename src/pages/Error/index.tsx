import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ErrorSvg } from "../../components/ImageSvg/pageError";

import * as Styled from "./styles";

interface ErrorProps {
  title?: string;
  nameButton?: string;
}

export const Error: React.FC<ErrorProps> = ({
  title = "Ops! Essa página está na lua.",
  nameButton = " Página Inicial",
}) => {
  const navigate = useNavigate();

  return (
    <Styled.ContainerErrorPage>
      <Styled.Information>
        <h4>{title}</h4>
        <Button
          color="#ffff"
          backgroundColor="#301f68"
          width={180}
          height={60}
          borderRadius={12}
          onClick={() => navigate("/")}
        >
          {nameButton}
        </Button>
      </Styled.Information>
      <ErrorSvg />
    </Styled.ContainerErrorPage>
  );
};
