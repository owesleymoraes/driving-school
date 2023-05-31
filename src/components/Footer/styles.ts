import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 80rem;
  width: 70rem;
  background-color: #2a2a2a;
  color: white;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const AboutFooter = styled.div`
`;

export const ContactsFooter = styled.div``;

export const WrapperContacts = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoContacts = styled.div<{ isColor?: boolean }>`
  display: flex;
  margin-top: 4px;
  align-items: center;
  flex-direction: row;
  color: ${({ theme, isColor }) =>
    isColor ? theme.colors.primary.main : "#cecece"};
`;
export const IconContacts = styled.div<{ isColor?: boolean }>`
  margin-right: 12px;
`;

export const SocialMediaFooter = styled.div``;

export const InformationText = styled.p`
  font-size: 12px;
  width: 200px;
  color: #aaaa;
`;
