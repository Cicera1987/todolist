import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 95%;
  height: 500px;
  padding: 10px;
  margin: 0 0 0 2em;
  border-radius: 20px ;
  background-color: #f3dbe4;

`

export const ContainerButtons = styled.div`
  display: flex;
  width: 95%;
  padding: 1em;

`
export const DivButtons = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items: center;
  width: 90%;

`
export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 210px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  z-index: 10;
  padding-bottom: 1em;
`
export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  padding: 0.8em;
  margin: 0 0 1em 0;
  outline: none;
`
export const ContainerTitle = styled.label`
  display: flex;
  margin: 1em 0 0 0; 
`

export const ContainerModalTasks = styled.div`
  display: flex;
  flex-wrap:wrap;
  width: 200px;
  height: 250px;
`