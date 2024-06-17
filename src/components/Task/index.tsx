import React, { Dispatch, SetStateAction, useState } from "react";
import { Check, Trash } from "@phosphor-icons/react";
import {
  CheckboxContainer,
  CheckboxIconContainer,
  HiddenCheckbox,
  StyledCheckbox,
  TrashIconButton,
  Text,
} from "./styles";
import { useTheme } from "styled-components";
import { ITask } from "../../pages/Main";

interface ITaskProps {
  task: ITask;
  handleCheckboxChange: (task: ITask) => void;
  handleDeleteTask: (task: ITask) => void;
}

export const Task: React.FC<ITaskProps> = ({
  task,
  handleCheckboxChange,
  handleDeleteTask,
}) => {
  const theme = useTheme();

  return (
    <CheckboxContainer checked={task.checked}>
      <CheckboxIconContainer>
        <HiddenCheckbox
          onChange={() => handleCheckboxChange(task)}
          checked={task.checked}
        />
        <StyledCheckbox
          checked={task.checked}
          onClick={() => handleCheckboxChange(task)}
        >
          <Check size={theme.fontSizes.sm} color={theme.colors.gray100} />
        </StyledCheckbox>
      </CheckboxIconContainer>
      <Text checked={task.checked}>{task.name}</Text>
      <TrashIconButton onClick={() => handleDeleteTask(task)}>
        <Trash size={theme.fontSizes.xxl} color={theme.colors.gray300} />
      </TrashIconButton>
    </CheckboxContainer>
  );
};
