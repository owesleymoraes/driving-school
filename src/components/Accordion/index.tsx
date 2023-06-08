import React, { useState } from "react";
import { Title } from "../Title";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

import * as Styled from "./styles";

interface AccordionProps {
  title: string;
  controlOpen?: boolean;
  onlyOneOpenItem?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  
  onClickSelectedItemAccordion?: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  controlOpen,
  onlyOneOpenItem = false,
  onClickSelectedItemAccordion,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isControlled = onlyOneOpenItem ? controlOpen : isOpen;
  const open = isControlled;

  const handleClickAccordion = () => {
    const newState = !open;
    if (onlyOneOpenItem) {
      onClickSelectedItemAccordion && onClickSelectedItemAccordion();
    } else {
      setIsOpen(newState);
    }
  };

  return (
    <Styled.Root isOpen={open!}>
      <Styled.HeadAccordion onClick={() => handleClickAccordion()}>
        <Styled.WrapperHeader>
          <Title tagOfTitle="h6" description={title} withBottomBar={false} />
          <Styled.IconAccordion>
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </Styled.IconAccordion>
        </Styled.WrapperHeader>
      </Styled.HeadAccordion>
      <Styled.BodyAccordion isOpen={open!}>{children}</Styled.BodyAccordion>
    </Styled.Root>
  );
};
