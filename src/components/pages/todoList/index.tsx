import { Link } from "react-router-dom";
import { ITodoItem } from "../../../types";
import {
  ContainerModalTasks,
  Title,
  Description,
  ContainerIconTodo,
  ContainerIconItem,
  ContainerIconTitle,
  ContainerTags,
} from "./styles";

import {
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiArrowCircleRight,
} from "react-icons/hi";

interface taskProps{
  task: ITodoItem
}

function Todolist({task}: taskProps) {
  
  return (
    <ContainerModalTasks>
      <div>
        <ContainerIconTitle>
          <HiArrowCircleRight fontSize={20} color="#5e5858" />
          <Title>{task.title}</Title>
        </ContainerIconTitle>
        <ContainerTags>

        </ContainerTags>
        <Description>{task.description}</Description>
        <ContainerIconTodo>
          <ContainerIconItem>
            <a>
              <HiOutlinePencilAlt fontSize={20} color="#5e5858" />
            </a>
            <a>
              <HiOutlineTrash fontSize={20} color="#5e5858" />
            </a>
          </ContainerIconItem>
        </ContainerIconTodo>
      </div>
    </ContainerModalTasks>
  );
};

export default Todolist;
