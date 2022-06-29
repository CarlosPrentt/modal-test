/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Wrapper } from ".";

export const Header = () => {
  return (
    <Wrapper className="header">
      <p className="header__logo">CP</p>
      <nav className="header__nav">
        <a href="#" className="header__nav-item pointer">
          Agregar usuarios
        </a>
        <a href="#" className="header__nav-item pointer">
          Contacto
        </a>
      </nav>
    </Wrapper>
  );
};
