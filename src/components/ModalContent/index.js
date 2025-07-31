import React, { useContext } from "react";
import {
  Container,
  Content,
  InputLabel,
  Input,
  Button,
  TextButton,
  CloseButton,
  CloseText,
} from "./styles";
import { AppContext } from "../../contexts/appContext";
export function ModalContent() {
  const { stateModal } = useContext(AppContext);

  return (
    <Container>
      <Content>
        <InputLabel>Produto</InputLabel>
        <Input placeholder="Nome do produto" />
        <InputLabel>Quantidade</InputLabel>
        <Input placeholder="00" />
        <Button>
          <TextButton>Adicionar</TextButton>
        </Button>
        <CloseButton onPress={stateModal}>
          <CloseText>Fechar</CloseText>
        </CloseButton>
      </Content>
    </Container>
  );
}
