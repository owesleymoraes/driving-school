import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #2a2a2a;
  color: white;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const WrapperContacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContacts = styled.div<{ isColor?: boolean }>`
  display: flex;
  margin-top: 4px;
  align-items: center;
  flex-direction: row;
  cursor: ${(props) => (props.isColor ? "pointer" : " ")};
  color: ${(props) => (props.isColor ? "#ffc107" : "#cecece")};

  & :hover {
    color: #fff;
  }
`;

export const IconContacts = styled.div<{ isColor?: boolean }>`
  margin-right: 8px;
  margin-top: 12px;
`;

export const SocialMediaFooter = styled.div``;

export const InformationText = styled.p`
  font-size: 12px;
  width: 200px;
  color: #aaaa;
`;

export const LabelSocialMedia = styled.p`
  font-size: 12px;
  width: 200px;
  color: "#ffc103";
`;
