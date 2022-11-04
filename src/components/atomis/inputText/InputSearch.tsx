import React, { InputHTMLAttributes } from "react";
import { ContainerInput} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputText: React.FC<InputProps> = ({...rest}) => {
  return (
    <ContainerInput>
      <input {...rest} />
    </ContainerInput>
  );
};


export default InputText;
