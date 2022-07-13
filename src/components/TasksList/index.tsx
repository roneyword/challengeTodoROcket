import React from "react";
import IconTrash from "../../assets/iconComponents/iconTrash";
import { TaskList } from "./style";

interface TaskListProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface taskProps {
  taskList: TaskListProps[];
  onDeletTask: (id: string) => void;
  onCompleted: (id: string) => void;
}

export const TasksList: React.FC<taskProps> = ({
  taskList,
  onDeletTask,
  onCompleted,
}) => {
  const handleDeletComment = (id: string) => {
    onDeletTask(id);
  };

  const handleCompletedTask = (id: string) => {
    onCompleted(id);
  };

  return (
    <ul>
      {React.Children.toArray(
        taskList.map((task) => (
          <TaskList className="task" isCompleted={task.isCompleted}>
            <input
              type="radio"
              id={task.id}
              onClick={() => handleCompletedTask(task.id)}
              defaultChecked={false}
            />

            <label htmlFor={task.id}>{task.content}</label>

            <button onClick={() => handleDeletComment(task.id)}>
              <IconTrash />
            </button>
          </TaskList>
        ))
      )}
    </ul>
  );
};
