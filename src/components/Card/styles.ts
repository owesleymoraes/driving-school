import styled from "styled-components";

export const BodyCard = styled.div`
  padding: 16px;
`;

export const WrapperCard = styled.div`
  display: flex;
  max-width: 360px;
  width: 320px;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;
`;

export const Image = styled.img<{ descriptionImg?: string }>`
  max-width: 320px;
  width: 100%;
  margin-top: 16px;
  background-color: ${(props) =>
    props.descriptionImg ? "rgba(0,0,0,0.4)" : "transparent"};
  padding: ${(props) => (props.descriptionImg ? "8px 16px" : "0")};
  color: ${(props) => (props.descriptionImg ? "#fff" : "")};
`;

export const TitleCard = styled.div`
  margin-top: 8px;
  white-space: normal;
  width: 100%;
`;

export const DescriptionCard = styled.span`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const ButtonCard = styled.div``;

export const DescriptionImage = styled.div`
  margin-top: 1rem;
`;
