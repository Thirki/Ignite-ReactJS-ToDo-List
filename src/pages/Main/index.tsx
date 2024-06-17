import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Content, Header, TaskContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { EmptyTask, Task, TaskInput, TasksCounter } from "../../components";

export interface ITask {
  checked: boolean;
  name: string;
  id: string;
}

export const Main: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleCheckboxChange = (task: ITask) => {
    const newTask: ITask = { ...task, checked: !task.checked };
    setTasks((prevState) => {
      return prevState.map((oldTask) =>
        oldTask.id === newTask.id ? newTask : oldTask
      );
    });
  };

  const handleCreateTask = (name: string) => {
    const newTask: ITask = { name, checked: false, id: uuidv4() };
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  };

  const handleDeleteTask = (task: ITask) => {
    setTasks((prevState) => {
      return prevState.filter((oldTask) => oldTask.id !== task.id);
    });
  };

  return (
    <div>
      <Header>
        <img src={Logo} alt="to-do logo" />
      </Header>
      <Content>
        <TaskInput handleCreateTask={handleCreateTask} />
        <TasksCounter tasks={tasks} />
        {!tasks.length ? (
          <EmptyTask />
        ) : (
          <TaskContainer>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleCheckboxChange={handleCheckboxChange}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </TaskContainer>
        )}
      </Content>
    </div>
  );
};
