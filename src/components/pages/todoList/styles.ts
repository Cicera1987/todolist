import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  width:90%;
  height: 500px;
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
  width: 230px;
  height: 300px;
  background-color:#FFF5EE;
  border-radius: 15px;
  padding-bottom: 1em;
`
export const TextArea = styled.textarea`
  display: flex;
  width: 89%;
  height: 180px;
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
  flex-wrap: wrap;
  background-color:#FFF5EE;
  width: 170px;
  border: solid 0.5px  #FFE4E1;
  border-radius: 10px;
  height: 190px;
  margin: 0 0 0 1em;

`

export const Title = styled.h5`
  padding: 5px;
  color: 	#696969;
  align-items: center;
  

`

export const Description = styled.div`
  width: 140px;
  height: 90px;
  padding: 5px;
  color: 	#696969;
  margin: 0 0 0 6px;
  border: solid 0.5px  #D3D3D3;
  border-radius: 8px;
  font-size: 13px;
`

export const ContainerListTask = styled.div`
  display: flex;
  width:100%;
  height: 400px; 

`

export const ContainerIconTodo = styled.div`
  display: flex;

`
export const ContainerIconItem = styled.div`
  display: flex;
  flex-direction:row;
  margin: 0.3em;
  gap: 7.2em;
  position: relative;
  cursor: pointer;
`
export const ContainerIconTitle = styled.div`
  display: flex;
  flex-direction:row;
  margin: 0.3em;
  position: relative;
  align-items: center;

`
export const ContainerTags= styled.div`
  display: flex;
  flex-direction:row;
  margin: 0.3em;
  position: relative;

`