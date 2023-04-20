import styled from "styled-components";

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;
  border: 2px solid #ffc107;

  &:hover:enabled {
    background: #c79100;
    color: red;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
