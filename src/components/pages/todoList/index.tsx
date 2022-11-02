import { ITodoItem } from "../../../types";
import {
  ContainerModalTasks,
  Title,
  Description,
} from "./styles";

interface taskProps{
  task: ITodoItem
}

function Todolist({task}: taskProps) {
  
  return (
      <ContainerModalTasks>
        <div>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
        </div>
      </ContainerModalTasks>
  );
};

export default Todolist;
