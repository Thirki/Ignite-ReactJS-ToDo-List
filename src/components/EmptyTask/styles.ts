import styled from "styled-components";

export const Container = styled("main")`
  padding-top: 64px;
  border-top: ${(props) => `1px solid ${props.theme.colors.gray400}`};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const Image = styled("img")`
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.space.md};
`;

export const Text = styled("p")`
  color: ${(props) => props.theme.colors.gray300};
  text-align: center;
  font-weight: bold;

  & span {
    font-weight: normal;
  }
`;
