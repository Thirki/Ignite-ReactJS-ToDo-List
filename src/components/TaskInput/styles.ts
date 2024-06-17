import React from "react";
import styled from "styled-components";

interface IButton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Wrapper = styled("form")`
  height: ${(props) => props.theme.space.xxl};

  margin-bottom: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};
`;

export const Input = styled("input")`
  width: 100%;

  border: none;
  border-radius: ${(props) => props.theme.border.md};
  border: ${(props) => `1px solid ${props.theme.colors.gray700}`};

  padding: ${(props) => props.theme.space.md};

  background-color: ${(props) => props.theme.colors.gray500};

  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.gray100};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray300};
  }

  &:focus {
    outline: ${(props) => `1px solid ${props.theme.colors.blue}`};
  }
`;

export const Button: React.FC<IButton> = styled("button")`
  padding: ${(props) => props.theme.space.md};

  display: flex;
  gap: ${(props) => props.theme.space.xs};
  justify-content: center;

  background-color: ${(props) => props.theme.colors.blueDark};
  color: ${(props) => props.theme.colors.white};

  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: bold;

  border: none;
  border-radius: ${(props) => props.theme.border.md};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.blue};
    transition: 0.2s;
  }
`;
