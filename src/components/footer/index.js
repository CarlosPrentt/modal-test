import styled from "@emotion/styled";

export * from "./Footer";

export const Wrapper = styled.footer`
  justify-content: center;
  flex-direction: column;
  font-size: 12px;

  .footer {
    &__social-networks {
      display: flex;
      gap: 4px;
      font-size: 16px;
    }
  }
`;
