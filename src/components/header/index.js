import styled from "@emotion/styled";

export * from "./Header";

export const Wrapper = styled.header`
  justify-content: space-between;

  .header {
    &__logo {
      font-weight: 700;
      font-size: 50px;
      text-shadow: 0 12px 0 var(--shadow);

      @media (max-width: 600px) {
        font-size: 40px;
      }
    }
    &__nav {
      display: flex;
      gap: 10px;

      &-item {
        transition: 0.4s all;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
`;
