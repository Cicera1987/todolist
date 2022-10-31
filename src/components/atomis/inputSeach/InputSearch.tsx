import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { ContainerInput} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const InputSearch: React.FC<InputProps> = ({icon:Icon, ...rest}) => {
  return (
    <ContainerInput>
      {Icon && <Icon size={15} color="#5e5858" />}
      <input {...rest} />
    </ContainerInput>
  );
};


export default InputSearch;
