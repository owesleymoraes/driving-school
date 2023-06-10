import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionAbout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    display: flex;
    position: relative;
  }
`;

export const InformationText = styled.p`
  width: 600px;
`;

export const ContainerVideo = styled.div`
  display: flex;
  left: 50%;
  width: 500px;
  margin-top: 48px;
  margin-bottom: 60px;

  @media (min-width: 1200px) {
    display: flex;
    position: absolute;
  }
`;

export const WrapperCard = styled.div<{ openAccordion: boolean }>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
  margin-bottom: 32px;
  height: ${(props) => (props.openAccordion ? "780px" : "390px")};
  transition: height ${(props) => (props.openAccordion ? "1s" : ".5s")} ease;

  @media (max-width: 735px) {
    flex-direction: column;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDoubts = styled.div`
margin-bottom: 24px;
`
