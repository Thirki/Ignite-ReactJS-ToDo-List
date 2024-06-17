import styled from "styled-components";

export const Content = styled("div")`
  padding: ${(props) => `0 ${props.theme.fontSizes.md}`};
  margin: 0 auto;
  max-width: 1200px;

  transform: ${(props) => `translateY(-${props.theme.space.xl})`};
`;

export const Header = styled("header")`
  height: 200px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.gray700};
`;

export const TaskContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.sm};
`;
