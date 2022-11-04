import React, { useState } from "react";
import Button from "../../atomis/button";
import InputText from "../../atomis/inputText/InputSearch";
import { ContainerHome, ContainerModal, ContainerTitle } from "../../organismes/createTask/styles";
import { DivButtons } from "../todoList/styles";
import { ContainerTopLogin } from "./style";

function Login() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  
  return (
    <>
      <ContainerTopLogin />
      <ContainerHome>
        <ContainerModal>
          <h2>Fazer login</h2>
          <ContainerTitle>Login</ContainerTitle>
          <InputText
            name={"Login"}
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <ContainerTitle>Senha</ContainerTitle>
          <InputText
            name={"Password"}
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <DivButtons>
            <Button>Login</Button>
          </DivButtons>
        </ContainerModal>
      </ContainerHome>
    </>
  );
}

export default Login;
