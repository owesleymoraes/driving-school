import React, { Children, useState } from "react";
import { Accordion } from "./component/Accordion";

export const AccordionGroup: React.FC = () => {
  const [indexItemClicked, setIndexItemClicked] = useState(-1);

  const itemsAccordion = [
    <Accordion isComponentControlled title="Como eu renovo minha CNH ?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
      doloribus. Quasi quisquam harum ullam.
    </Accordion>,
    <Accordion isComponentControlled title="Como faço mudança de categoria ?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
      doloribus. Quasi quisquam harum ullam.
    </Accordion>,
    <Accordion isComponentControlled title="Fui multado e agora ?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
      doloribus. Quasi quisquam harum ullam.
    </Accordion>,
  ];

  const handleAccordionClick = (index: number) => {
    setIndexItemClicked(indexItemClicked === index ? -1 : index);
  };

  return (
    <>
      {Children.map(itemsAccordion, (item, index) => {
        if (React.isValidElement(item)) {
          return React.cloneElement(item, {
            controlOpen: indexItemClicked === index,
            onClickSelectedItemAccordion: () => handleAccordionClick(index),
          } as React.Attributes);
        }
      })}
    </>
  );
};
