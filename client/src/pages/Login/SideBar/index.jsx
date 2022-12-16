import React from 'react'
import { BtnArea, Button, Container, ForgetPassword, Logo, Text, TextArea, Title } from './SideBar'

export default function SideBar() {
  return (
    <Container>
        <Logo></Logo>
        <TextArea>
          <Title>Bem-vindo de volta!</Title>
          <Text>Acesse sua conta agora mesmo.</Text>
        </TextArea>
        <BtnArea>
          <Button>Entrar</Button>
          <ForgetPassword>Esqueci minha senha</ForgetPassword>
        </BtnArea>
    </Container>
  )
}
