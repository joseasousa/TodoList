import React from 'react';

import {
  Container, Text, Header, Content, Form, Item, Input, Button,
} from 'native-base';
import style from './styles';

const Login = () => (
  <Container>
    <Header />
    <Content style={style.container}>
      <Form>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input placeholder="Password" />
        </Item>
      </Form>

      <Button block>
        <Text>Login</Text>
      </Button>
    </Content>
  </Container>
);

export default Login;
