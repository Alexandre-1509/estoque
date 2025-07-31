import React from "react";
import { Container, SignOutButton, Title } from "./styles";
import { Feather } from "@react-native-vector-icons/feather";

export function Header() {
  return (
    <Container>
      <Title>StockFlow</Title>
      <SignOutButton>
        <Feather name="log-out" size={25} color={'#FFF'}/>
      </SignOutButton>
    </Container>
  );
}
