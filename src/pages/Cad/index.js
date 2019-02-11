import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withFormik } from 'formik'
import {
  Container,
  Left,
  Textarea,
  Form,
  Item,
  Input,
  Text,
  Header,
  Content,
  Button
} from 'native-base'

import { Creators as AuthAction } from 'store/ducks/auth'
import { Creators as TaskAction } from 'store/ducks/task'

import styles from './styles'

class Cad extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0
    }
  }

  componentWillMount () {
    const { navigation } = this.props
    const task = navigation.getParam('task', {
      id: -1,
      name: '',
      description: ''
    })

    this.props.setValues({
      name: task.name,
      description: task.description,
      id: task.id
    })

    this.setState({ id: task.id })
  }

  render () {
    const { values, handleChange, handleSubmit, navigation } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button
              hasText
              transparent
              onPress={() => navigation.navigate('Task')}
            >
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content padder contentContainerStyle={styles.container}>
          <Form>
            <Item>
              <Input
                value={values.name}
                onChangeText={handleChange('name')}
                placeholder='nome'
              />
            </Item>

            <Textarea
              bordered
              placeholder='Textarea'
              value={values.description}
              onChangeText={handleChange('description')}
            />
          </Form>
          <Button bordered block onPress={handleSubmit}>
            <Text>Cadastrar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuth
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AuthAction, ...TaskAction }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      id: 0,
      name: '',
      description: ''
    }),
    handleSubmit: (values, { props: { putTask, updateTask, navigation } }) => {
      console.tron.log(values)

      if (values.id !== -1) {
        updateTask(values)
      } else {
        putTask(values)
      }
      navigation.goBack()
    }
  })(Cad)
)
