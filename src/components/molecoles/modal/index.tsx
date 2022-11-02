import React, { useEffect, useState } from "react";
import Button from "../../atomis/button";
import InputSearch from "../../atomis/inputSeach/InputSearch";
import { FiSearch } from "react-icons/fi";
import {
  ContainerHome,
  ContainerButtons,
  DivButtons,
  ContainerModal,
  TextArea,
  ContainerTitle,
} from "./styles";
import Modal from "react-modal";
import Todolist from "../../pages/todoList";
import { ITagsItem, ITodoItem } from "../../../types";
import { ContainerListTask } from "../../pages/todoList/styles";

Modal.setAppElement("#root");

const ModalCreateTask: React.FC = () => {
  const [modalIsOpen, setIsopen] = useState(false);
  const [todoTask, setTodoTask] = useState<ITodoItem[]>([]);
  const [taskTags, setTaskTags] = useState<ITagsItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleCloseModal = () => {
    setIsopen(false);
  };

  const OpenModal = () => {
    setIsopen(true);
  };



  const createTodos = () => {
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask: ITodoItem = {
        id: idRandom(99),
        title: title,
        description: description,
        tags: null,
    };
    setTodoTask([...todoTask, newTask]);
  };

  console.log(todoTask);

  
  useEffect(()=>{
    setTodoTask(todoTask);
  },[])

  return (
    <ContainerHome>
      <ContainerButtons>
        <InputSearch name="Pesquisa" icon={FiSearch} placeholder="Pesquisar" />
        <DivButtons>
          <Button onClick={OpenModal}>Criar Task</Button>
        </DivButtons>
      </ContainerButtons>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <ContainerModal>
          <h4>Criar Tarefa</h4>
          <ContainerTitle>Titulo</ContainerTitle>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ContainerTitle>Descrição</ContainerTitle>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={createTodos}>Salvar</Button>
        </ContainerModal>
        <DivButtons>
          <Button onClick={handleCloseModal}>Voltar</Button>
        </DivButtons>
      </Modal>
      <ContainerListTask>
        {todoTask.map((task, key) => (
          <Todolist key={key} task={task} />
        ))}
      </ContainerListTask>
    </ContainerHome>
  );
};

export default ModalCreateTask;
