import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as AuthAction } from 'store/ducks/auth'
import { Creators as TaskAction } from 'store/ducks/task'

import { FlatList, Alert } from 'react-native'
import {
  Container,
  Header,
  Left,
  Button,
  Title,
  Icon,
  Body,
  Content,
  Right,
  ListItem,
  Text
} from 'native-base'

class Tasks extends Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    const { getTasks } = this.props
    getTasks()
  }

  renderItem = ({ item }) => {
    const { updateTask, delTask, navigation } = this.props

    return (
      <ListItem>
        <Body>
          <Text>{item.name}</Text>
        </Body>

        <Left>
          <Button
            transparent
            onPress={() => navigation.push('Cad', { task: item })}
          >
            <Text>Editar</Text>
          </Button>
          <Button transparent onPress={() => delTask(item)}>
            <Text>Remover</Text>
          </Button>
        </Left>
      </ListItem>
    )
  }

  render () {
    const { auth, navigation, signoutRequest } = this.props
    if (!auth) {
      navigation.navigate('Login')
    }
    console.tron.log(this.props.tasks)
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Todo List</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigation.push('Cad')}>
              <Icon type='AntDesign' name='plus' />
            </Button>
            <Button transparent onPress={() => signoutRequest()}>
              <Icon type='AntDesign' name='logout' />
            </Button>
          </Right>
        </Header>
        <Content>
          <FlatList
            data={this.props.tasks}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
            stickyHeaderIndices={this.state.stickyHeaderIndices}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuth,
  tasks: state.task.data
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...AuthAction,
      ...TaskAction
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)
