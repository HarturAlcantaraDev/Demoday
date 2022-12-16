import React from "react";
import { Button, Container, InputText, Text, Title } from "./Form";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";

export default function Form() {
  return (
    <Container>
      <Title>Crie sua conta</Title>
      <Text>Preencha seus dados</Text>
      <InputText>
        <AiOutlineUser size={"22px"} color={"#4e4e4e"}/>
        <input type="text" name="" id="" placeholder="Nome" />
      </InputText>
      <InputText>
        <AiOutlineMail size={"22px"} color={"#4e4e4e"} />
        <input type="text" name="" id="" placeholder="Email" />
      </InputText>
      <InputText>
        <AiFillLock size={"22px"} color={"#4e4e4e"} />
        <input type="text" name="" id="" placeholder="Senha" />
      </InputText>
      <InputText>
        <AiFillLock size={"22px"} color={"#4e4e4e"} />
        <input type="text" name="" id="" placeholder="Confirme a senha" />
      </InputText>
      <Button>Cadastrar</Button>
    </Container>
  );
}
