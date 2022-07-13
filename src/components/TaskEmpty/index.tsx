import IconClipBoard from "../../assets/iconComponents/iconClipBoard";
import { TaskEmptyContainer } from "./style";

export const TaskEmpty: React.FC = () => {
  return (
    <TaskEmptyContainer>
      <IconClipBoard />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </TaskEmptyContainer>
  );
};
