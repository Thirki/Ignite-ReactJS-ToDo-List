import { FC, ReactNode } from "react";
import styled from "styled-components";
import { rgba } from "polished";

interface LabelProps {
  checked: boolean;
  children: ReactNode;
  onClick: () => void;
}

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

type DefaultProps = Omit<LabelProps, "onClick">;

export const CheckboxContainer: FC<DefaultProps> = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.border.md};

  background-color: ${(props) => props.theme.colors.gray500};
  border: ${(props) => `1px solid ${props.theme.colors.gray400}`};
  padding: ${(props) => props.theme.space.lg};

  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;

  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const CheckboxIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TrashIconButton: React.FC<ButtonProps> = styled.button`
  border-radius: ${(props) => props.theme.border.xs};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray500};
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray400};
    svg {
      fill: ${(props) => props.theme.colors.danger};
    }
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const Text: FC<DefaultProps> = styled.label`
  font-size: ${(props) => props.theme.fontSizes.sm};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  overflow-wrap: break-word;
  width: calc(100% - 80px);
  color: ${(props) =>
    props.checked ? props.theme.colors.gray300 : props.theme.colors.gray100};

  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const StyledCheckbox: FC<LabelProps> = styled.label`
  margin-top: 5px;
  width: ${(props) => props.theme.space.lg};
  height: ${(props) => props.theme.space.lg};
  border-radius: ${(props) => props.theme.border.full};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.purpleDark : theme.colors.gray500};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.checked
      ? `2px solid ${props.theme.colors.purpleDark}`
      : `2px solid ${props.theme.colors.blue}`};

  svg {
    display: ${(props) => (props.checked ? "flex" : "none")};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.checked
        ? props.theme.colors.purple
        : rgba(props.theme.colors.blueDark, 0.2)};
    border: ${(props) =>
      props.checked
        ? `2px solid ${props.theme.colors.purple}`
        : `2px solid ${props.theme.colors.blueDark}`};
  }
`;
