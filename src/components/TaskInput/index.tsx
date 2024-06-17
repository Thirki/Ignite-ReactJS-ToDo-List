import React, { useState } from "react";
import { Input, Wrapper, Button } from "./styles";
import { PlusCircle } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

interface ITaskInputProps {
  handleCreateTask: (name: string) => void;
}

export const TaskInput: React.FC<ITaskInputProps> = ({ handleCreateTask }) => {
  const [taskName, setTaskName] = useState("");

  const theme = useTheme();

  const handleSubmitTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (taskName) {
      handleCreateTask(taskName);
      setTaskName("");
    }
  };

  const handleChangeTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value;
    if (text !== " ") {
      setTaskName(event.target.value);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={handleChangeTaskName}
      />
      <Button onClick={handleSubmitTask}>
        <p>Criar</p>
        <PlusCircle size={theme.fontSizes.xl} weight="bold" />
      </Button>
    </Wrapper>
  );
};
