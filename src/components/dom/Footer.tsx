import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 420;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--colors-text);

  border: 2px solid;
  border-color: var(--colors-gray);

  padding: 1rem 2rem;
  border-radius: 16px;

  @media (max-width: 1000px) {
    font-size: 0.75rem;
  }

  & a {
    color: ${({ theme }) => theme.colors.primary.default};
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary.default};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.primary.hovered};
  }
  & a:visited {
    color: ${({ theme }) => theme.colors.primary.pressed};
  }
`;

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      Crafted with 💙 by{" "}
      <a href="https://whoisryosuke.com" title="Ryosuke's Blog and Portfolio">
        @whoisryosuke
      </a>{" "}
      - 📁{" "}
      <a href="https://github.com/whoisryosuke/ryoturia-web">Source Code</a>
    </StyledFooter>
  );
};

export default Footer;
