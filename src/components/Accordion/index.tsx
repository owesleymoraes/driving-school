import React, { useState } from "react";
import { Title } from "../Title";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

import * as Styled from "./styles";

interface AccordionProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.Root  isOpen={isOpen}>
      <Styled.HeadAccordion onClick={() => handleClickAccordion()}>
        <Styled.WrapperHeader>
          <Title tagOfTitle="h6" description={title} withBottomBar={false} />
          <Styled.IconAccordion>
            {isOpen ? <MdExpandLess /> : <MdExpandMore />}
          </Styled.IconAccordion>
        </Styled.WrapperHeader>
      </Styled.HeadAccordion>
      <Styled.BodyAccordion isOpen={isOpen}>{children}</Styled.BodyAccordion>
    </Styled.Root>
  );
};
