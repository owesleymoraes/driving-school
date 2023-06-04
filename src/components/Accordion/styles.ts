import styled from "styled-components";

export const Root = styled.div<{ isOpen: boolean }>`
  border: 1px solid #e0e0e0;
  border-left: 5px solid #ffc107;
  padding: 16px;
  background-color: #ffff;
  height: ${(props) => (props.isOpen ? "5.37rem" : "4.37rem")};
  transition: height ${(props) => (props.isOpen ? ".5s" : ".5s")} ease;
`;

export const WrapperHeader = styled.div`
  display: flex;
  border-bottom: 0;
  align-items: center;
  justify-content: space-between;
`;
export const HeadAccordion = styled.div`
  cursor: pointer;
`;

export const IconAccordion = styled.div`
  font-size: 1.75rem;
`;

export const BodyAccordion = styled.div<{ isOpen: boolean }>`
  height: ${(props) => (props.isOpen ? "2.5rem" : "0")};
  transition: height ${(props) => (props.isOpen ? ".5s" : ".5s")} ease;
  overflow: hidden;
  border-top: 0;
`;
