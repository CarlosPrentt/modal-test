import React from "react";
import { Wrapper } from ".";

export const Footer = () => {
  return (
    <Wrapper className="footer">
      <p>Carlos Prentt, FullStack Developer</p>
      <div className="footer__social-networks">
        <a href="/" target="_blank">
          <i className="fa-brands fa-linkedin text-white" />
        </a>
        <a href="/" target="_blank">
          <i className="fa-brands fa-github-square text-white" />
        </a>
      </div>
      <p>@2022 UserApp, Inc.</p>
    </Wrapper>
  );
};
