import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
    border-radius: 12px;
    padding: 0 0 0 1em;
    height: 35px;
    background-color: #ffff;

    color: #f4ede8;
    align-items: center;
input{
    background: transparent;
    outline: none;
    border: 0;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 0 0 0.5em;
}
    & + input{
        margin-top: 10px 
    }

`