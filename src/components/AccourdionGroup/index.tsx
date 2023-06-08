import React, { Children, useState } from "react";
import { Accordion } from "../Accordion";

import * as Styled from "./styles";

interface AccordionGroupProps {
  informationAccordion: accordionItems[];
}

export type accordionItems = {
  titleAccordion: string;
  descriptionAccordion: string;
};

export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  informationAccordion,
}) => {
  const [indexItemClicked, setIndexItemClicked] = useState(-1);

  const itemsAccordion = [
    informationAccordion.map((item, index) => {
      return (
        <Accordion key={index} title={item.titleAccordion} onlyOneOpenItem>
          {item.descriptionAccordion}
        </Accordion>
      );
    }),
  ];

  const handleAccordionClick = (index: number) => {
    setIndexItemClicked(indexItemClicked === index ? -1 : index);
  };

  return (
    <Styled.Root>
      {Children.map(itemsAccordion, (item, index) => {
        if (React.isValidElement(item)) {
          return React.cloneElement(item, {
            controlOpen: indexItemClicked === index,
            onClickSelectedItemAccordion: () => handleAccordionClick(index),
          } as React.Attributes);
        }
      })}
    </Styled.Root>
  );
};
