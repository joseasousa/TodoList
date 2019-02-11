import React, { Component } from 'react'

import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Container,
  Text,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button
} from 'native-base'
import { Creators as AuthAction } from 'store/ducks/auth'
import styles from './styles'

class Login extends Component {
  state = {
    password: ''
  }

  login = () => {
    const { signinRequest } = this.props
    const { password } = this.state
    signinRequest(password)
    this.setState({ password: '' })
  }

  cadastrar = () => {
    const { createProfileRequest } = this.props
    const { password } = this.state
    createProfileRequest(password)

    this.setState({ password: '' })
  }

  handleChange = password => {
    this.setState({ password })
  }

  render () {
    const { password } = this.state
    const { auth, navigation } = this.props

    if (auth) {
      return navigation.navigate('Task')
    }
    return (
      <Container>
        <Header />
        <Content padder>
          <View style={styles.container}>
            <Form>
              <Item>
                <Input
                  value={password}
                  onChangeText={text => this.handleChange(text)}
                  placeholder='Senha'
                />
              </Item>
            </Form>

            <Button block onPress={this.login}>
              <Text>Login</Text>
            </Button>

            <Button bordered block onPress={this.cadastrar}>
              <Text>Cadastrar</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuth
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthAction }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
