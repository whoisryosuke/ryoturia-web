import { css } from "styled-components";

export const BUTTON_STYLES = css`
  color: ${({ theme }) => theme.colors.button.text.default};
  background: ${({ theme }) => theme.colors.button.bg.default};

  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes["1"]};
  line-height: ${({ theme }) => theme.fontSizes["2"]};

  border: 2.5px solid ${({ theme }) => theme.colors.button.border.default.color};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: ${({ theme }) => theme.space[5]};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    border-color: ${({ theme }) => theme.colors.button.border.hovered.color};
    background: ${({ theme }) => theme.colors.button.bg.hovered};
    box-shadow: ${({ theme }) => theme.shadows.hovered};
  }

  &[data-pressed="true"] {
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background: ${({ theme }) => theme.colors.button.bg.pressed};
    border-color: ${({ theme }) => theme.colors.button.border.hovered.color};
    box-shadow: ${({ theme }) => theme.shadows.hovered};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.pressed};
    outline-offset: -1px;
  }

  &:disabled {
    border-color: var(--border-color-disabled);
    color: ${({ theme }) => theme.colors.button.text.disabled};
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: box-shadow, color, background, border-color;
    transition-duration: 420ms;
  }
`;
