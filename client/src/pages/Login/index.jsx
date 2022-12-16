import React from 'react'
import Form from './Form'
import { Container, Content } from './Login'
import SideBar from './SideBar'

export default function Login() {
  return (
    <Container>
        <Content>
            <SideBar />
            <Form />
        </Content>

    </Container>

  )
}
