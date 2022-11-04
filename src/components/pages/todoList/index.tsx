import { ITodoItem } from "../../../redux/types";
import {
  ContainerModalTasks,
  Title,
  Description,
  ContainerIconTodo,
  ContainerIconItem,
  ContainerIconTitle,
  ContainerTags,
} from "./styles";

import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import * as TodoActions from "./styles";
import {
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiArrowCircleRight,
} from "react-icons/hi";

interface taskProps {
  task: ITodoItem;
  deleteTask(DeleteTaskById: number): void;
  result(): void;

}

function Todolist({task, deleteTask}: taskProps) {
  
  return (
    <ContainerModalTasks>
      <div>
        <ContainerIconTitle>
          <HiArrowCircleRight fontSize={20} color="#5e5858" />
          <Title>{task.title}</Title>
        </ContainerIconTitle>   
        <ContainerTags></ContainerTags>
        <Description>{task.description}</Description>
        <ContainerIconTodo>
          <ContainerIconItem>
            <a><HiOutlinePencilAlt fontSize={20} color="#5e5858" /></a>
            <a><HiOutlineTrash fontSize={20} color="#5e5858"  onClick={() => deleteTask(task.id)}/></a>
          </ContainerIconItem>
        </ContainerIconTodo>
      </div>
    </ContainerModalTasks>
  );
};

const mapStateToProps = (state: { ITodoItem: any }) => ({
  ITodoItem: state.ITodoItem,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
