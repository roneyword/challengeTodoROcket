import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IconPlus from "../../assets/iconComponents/iconPlus";
import { TaskEmpty } from "../../components/TaskEmpty";
import { TasksList } from "../../components/TasksList";
import { TaskContainer } from "./style";

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export const TodoList: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [newTask, setNewTask] = useState<TaskProps[]>([]);

  const handleGetContent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (inputText.trim() === "") return;
    setNewTask([
      ...newTask,
      {
        id: uuidv4(),
        content: inputText,
        isCompleted: false,
      },
    ]);

    setInputText("");
  };

  const handleDeleTask = (id: string) => {
    const filterTask = newTask.filter((task) => task.id !== id);

    setNewTask(filterTask);
  };

  const handleCompletTask = (id: string) => {
    const completTask = newTask.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          content: task.content,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setNewTask(completTask);
  };

  const getCompletedTaskLength = () => {
    const complet = newTask.filter((task) => task.isCompleted);
    return complet.length;
  };

  return (
    <TaskContainer>
      <form onSubmit={handleCreateNewTask} className="new_task">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleGetContent}
          value={inputText}
        />
        <button type="submit">
          Criar <IconPlus />
        </button>
      </form>

      <main className="todo">
        <div className="tasks_info">
          <div className="tasks_created">
            <strong>
              Tarefas criadas <span>{newTask.length}</span>
            </strong>
          </div>

          <div className="tasks_completed">
            <strong>
              Concluidas{" "}
              <span>
                {String(getCompletedTaskLength())} de {newTask.length}
              </span>
            </strong>
          </div>
        </div>

        {newTask.length ? (
          <TasksList
            taskList={newTask}
            onDeletTask={handleDeleTask}
            onCompleted={handleCompletTask}
          />
        ) : (
          <TaskEmpty />
        )}
      </main>
    </TaskContainer>
  );
};
