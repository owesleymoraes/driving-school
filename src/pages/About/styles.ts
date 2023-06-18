import styled from "styled-components";

export const ContainerAbout = styled.div``;

export const ContainerColumn = styled.div`
  width: 31.25rem;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-around;
  margin-bottom: 32px;

  @media (max-width: 735px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  svg {
    color: #ffc107;
    max-width: 380px;
    height: auto;
    width: 100%;
  }
`;
