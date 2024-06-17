import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const CounterContainer = styled("div")`
  display: flex;
  align-items: center;

  font-weight: bold;
`;

export const CounterText = styled("p")`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSizes.sm};

  margin-right: ${(props) => props.theme.space.xs};
`;

export const CounterDisplay = styled("span")`
  min-width: 30px;

  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.gray400};
  padding: ${(props) => `4px ${props.theme.space.xs}`};

  border-radius: ${(props) => props.theme.border.full};
`;
