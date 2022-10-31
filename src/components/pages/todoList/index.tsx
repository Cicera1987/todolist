import React, { useState } from "react";
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

import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Todolist: React.FC = () => {
  const [modalIsOpen, setIsopen] = useState(false);
  const navigate = useNavigate();
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
    const newTodo: ITodoItem = {
      id: 1,
      title: title,
      description: description,
      tags: null,
    };
    setTask([...task, newTodo]);
  };
  console.log(title);
  console.log(description);

  return (
    <ContainerHome>
      <ContainerButtons>
        <InputSearch name="Pesquisa" icon={FiSearch} placeholder="Pesquisar" />
        <DivButtons>
          <Button onClick={OpenModal}>Criar Task</Button>
        </DivButtons>
      </ContainerButtons>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
          <ContainerModal>
            <h4>Criar Tarefa</h4>
            <div>
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
            </div>
            <Button onClick={createTodos}>
              Salvar
            </Button>
          </ContainerModal>
          <DivButtons>
            <Button onClick={handleCloseModal}>Voltar</Button>
          </DivButtons>
        </Modal>
      </div>
    </ContainerHome>
  );
};

export default Todolist;
