import React, { ButtonHTMLAttributes } from "react";
import { ContainerButtonTask } from "./styles";

interface ButtonAtributes extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonAtributes> = (props) => {
  return <ContainerButtonTask {...props} />;
};

export default Button;
