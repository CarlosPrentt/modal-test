import styled from "@emotion/styled";

export * from "./Button";

export const ButtonWrapper = styled.button`
  border: none;
  background-color: var(--bg);
  color: white;
  padding: 8px 18px;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:active {
    transform: ${({ disabled }) => (disabled ? "scale(1)" : "scale(0.98)")};
  }
`;
