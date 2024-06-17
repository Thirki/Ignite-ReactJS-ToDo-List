import React from "react";
import { Container, Text, Image } from "./styles";
import clipboard from "../../assets/Clipboard.svg";

export const EmptyTask = () => {
  return (
    <Container>
      <Image src={clipboard} alt="icone de copiar" />
      <Text>
        Você ainda não tem tarefas cadastradas
        <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </Text>
    </Container>
  );
};
