import styled from "styled-components";

export const ButtonColors = {
  danger: "danger",
  default: "default",
  primary: "primary",
};

export const ButtonVariants = {
  link: "link",
  default: "default",
  outlined: "outlined",
};



export const ButtonContainer = styled.div``;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;
  border: 2px solid #ffc107;

  &:hover:enabled {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
