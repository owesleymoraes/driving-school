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

  @media (min-width: 1200px) {
    display: flex;
    position: absolute;
  }
`;

export const WrapperCard = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 735px) {
  flex-direction: column;
  
}

`