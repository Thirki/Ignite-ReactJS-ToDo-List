import React, { useCallback, useEffect, useState } from "react";
import { ITask } from "../../pages/Main";
import {
  CounterContainer,
  CounterDisplay,
  CounterText,
  Wrapper,
} from "./styles";

interface ITasksCounterProps {
  tasks: ITask[];
}

export const TasksCounter: React.FC<ITasksCounterProps> = ({ tasks }) => {
  const doneTasks = useCallback((): string => {
    const checkedTasks = tasks.filter((task) => task.checked).length;
    const formatedDoneTasks = `${checkedTasks} de ${tasks.length}`;
    return tasks.length ? formatedDoneTasks : "0";
  }, [tasks]);

  return (
    <Wrapper>
      <CounterContainer>
        <CounterText>Tarefas criadas</CounterText>
        <CounterDisplay>{tasks.length}</CounterDisplay>
      </CounterContainer>
      <CounterContainer>
        <CounterText>Concluídas</CounterText>
        <CounterDisplay>{doneTasks()}</CounterDisplay>
      </CounterContainer>
    </Wrapper>
  );
};
