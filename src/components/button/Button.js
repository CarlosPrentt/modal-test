import React from "react";
import { ButtonWrapper } from ".";

export const Button = ({
  text = "Enviar",
  className = "",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <ButtonWrapper onClick={onClick} className={className} disabled={disabled}>
      {text}
    </ButtonWrapper>
  );
};
