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
  ContainerModalTasks,
} from "./styles";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalCreateTask: React.FC = () => {
  const [modalIsOpen, setIsopen] = useState(false);
  const [task, setTask] = useState<ITodoItem[]>([]);
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
        id: idRandom(9999999999),
        title: title,
        description: description,
        tags: null,
    };
    setTask([...task, newTask]);
  };
  
  console.log(task);

  useEffect(()=>{
    setTask(task)
  },[task])

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
          <Button onClick={createTodos}>
            Salvar
          </Button>
        </ContainerModal>
        <DivButtons>
          <Button onClick={handleCloseModal}>Voltar</Button>
        </DivButtons>
      </Modal>
      <>
        {task.map((task:ITodoItem) => {
          <ContainerModalTasks>
            {task.id} {task.title} {task.description}
          </ContainerModalTasks>;
        })}
      </>
    </ContainerHome>
  );
};

export default ModalCreateTask;
