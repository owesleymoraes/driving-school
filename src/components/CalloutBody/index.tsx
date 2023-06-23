import React from "react";
import * as Styled from "./styles";
import { Button } from "../Button";
import { Callout } from "./components/Callout";
import { CalloutMedia } from "./components/CalloutMedia";

interface CalloutBodyProps {
  nameButton?: string;
  title?: string;
  paragraph?: string;
}

export const CalloutBody: React.FC<CalloutBodyProps> = ({
  nameButton,
  title,
  paragraph,
}) => {
  return (
    <Callout>
      <Styled.ContainerCalloutBody>
        <div>
          <h6>{title}</h6>
          <p>{paragraph}</p>
        </div>
        <Styled.ContainerCalloutMedia>
          <CalloutMedia />
        </Styled.ContainerCalloutMedia>
      </Styled.ContainerCalloutBody>
      {nameButton && (
        <Styled.WrapperButton>
          <Button borderRadius={8} height={28} fontSize={12} onClick={() => {}}>
            {nameButton!}
          </Button>
        </Styled.WrapperButton>
      )}
    </Callout>
  );
};
