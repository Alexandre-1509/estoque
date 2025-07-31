import React, { useState, useContext } from "react";
import {
  Background,
  Container,
  InputLabel,
  Input,
  Button,
  TextButton,
  SignUpButton,
  SignUpText,
  Logo,
} from "./styles";
import { Platform } from "react-native";
import { AppContext } from "../../contexts/appContext";

export function SignIn() {
  const [register, setRegister] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { signUp, signIn } = useContext(AppContext);

  function registerMode() {
    setRegister(!register);
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  }

  function handleRegister() {
    if (userName === "" || userEmail === "" || userPassword === "") {
      alert('Por favor, preencha todos os campos!')
      return;
    }

    signUp(userName, userEmail, userPassword);
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    setRegister(!register);
  }

  function handleLogin() {
    if(userEmail === ''|| userPassword === ''){
      alert('Por favor, preencha todos os campos')
      return;
    }
    
    signIn(userEmail, userPassword);
  }

  {
    if (register) {
      return (
        <Background>
          <Logo source={require("../../assets/logotipo.png")} />
          <Container
            behavior={Platform.OS == "ios" ? "height" : "padding"}
          >
            <InputLabel>Nome</InputLabel>
            <Input
              placeholder="Nome completo"
              value={userName}
              onChangeText={setUserName}
            />

            <InputLabel>E-mail</InputLabel>
            <Input
              placeholder="email@email.com"
              value={userEmail}
              onChangeText={setUserEmail}
            />

            <InputLabel>Senha</InputLabel>
            <Input
              placeholder="********"
              value={userPassword}
              onChangeText={setUserPassword}
              secureTextEntry={true}
            />

            <Button onPress={handleRegister}>
              <TextButton>Cadastrar</TextButton>
            </Button>
            <SignUpButton onPress={registerMode}>
              <SignUpText>Fazer login</SignUpText>
            </SignUpButton>
          </Container>
        </Background>
      );
    }
    return (
      <Background>
        <Logo source={require("../../assets/logotipo.png")} />
        <Container behavior={Platform.OS == "ios" ? "height" : "padding"}>
          <InputLabel>E-mail</InputLabel>
          <Input
            placeholder="email@email.com"
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <InputLabel>Senha</InputLabel>
          <Input
            placeholder="********"
            value={userPassword}
            onChangeText={setUserPassword}
          />
          <Button onPress={handleLogin}>
            <TextButton>Entrar</TextButton>
          </Button>
          <SignUpButton onPress={registerMode}>
            <SignUpText>Ainda não tenho conta</SignUpText>
          </SignUpButton>
        </Container>
      </Background>
    );
  }
}
