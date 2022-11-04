import React, { useEffect, useState } from "react";
import Button from "../../atomis/button";
import InputSearch from "../../atomis/inputSeach/InputSearch";
import { FiSearch } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import Todolist from "../../pages/todoList";
import { ITagsItem, ITodoItem } from "../../../redux/types";
import { ContainerListTask } from "../../pages/todoList/styles";
import { TodoListTypes, DeleteTask } from "../../../redux/store/reducers/slice";
import { useDispatch } from "react-redux";
import {
  ContainerHome,
  ContainerButtons,
  DivButtons,
  ContainerModal,
  TextArea,
  ContainerTitle,
} from "./styles";
import { useSelector } from "react-redux";
import store from "../../../redux/store/store";

Modal.setAppElement("#root");

const ModalCreateTask: React.FC = () => {
  const [modalIsOpen, setIsopen] = useState(false);
  const [todoTask, setTodoTask] = useState<ITodoItem[]>([]);
  const [taskTags, setTaskTags] = useState<ITagsItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  const todosItens = useSelector(
    (state: ReturnType<typeof store.getState>) => state.todolist.ITodoItem
  );
  const handleCloseModal = () => {
    setIsopen(false);
  };

  const OpenModal = () => {
    setIsopen(true);
  };

  const createTask = () => {
    if (title === "" && description === "") {
      toast.error("Informe os dados para cadastrar uma tarefa!");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);
      const newTask: ITodoItem = {
        id: idRandom(99),
        title: title,
        description: description,
        tags: taskTags,
      };
      dispatch(TodoListTypes(newTask));
      toast.success("Tarefa cadastrada com sucesso!");
    }
  };

  // console.log(todoTask);

  function deleteTask(DeleteTaskById: number): void {
    dispatch(
      DeleteTask(
          todosItens.filter((ITodoItem) => ITodoItem.id !== DeleteTaskById)
      )
    );
    toast.warning("Tarefa excluida com sucesso!");
  }

  useEffect(() => {
    setTodoTask(todoTask);
  }, []);

  return (
    <ContainerHome>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        position="bottom-left"
      />
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
            <Button onClick={createTask}>Salvar</Button>
          </ContainerModal>
          <DivButtons>
            <Button onClick={handleCloseModal}>Voltar</Button>
          </DivButtons>
        </Modal>
      </div>
      <ContainerListTask>
        {todosItens.map((task, key) => (
          <Todolist key={key} task={task} deleteTask={deleteTask} />
        ))}
      </ContainerListTask>
    </ContainerHome>
  );
};

export default ModalCreateTask;
function useAppSelector() {
  throw new Error("Function not implemented.");
}

