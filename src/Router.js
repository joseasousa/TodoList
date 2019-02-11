import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginScreen from 'pages/Login'
import TaskScreen from 'pages/Tasks'
import CadScreeen from 'pages/Cad'

const Router = createStackNavigator(
  {
    Login: {
      navigationOptions: {
        header: null
      },
      screen: LoginScreen
    },
    Task: {
      navigationOptions: {
        header: null
      },
      screen: TaskScreen
    },
    Cad: {
      navigationOptions: {
        header: null
      },
      screen: CadScreeen
    }
  },
  { initialRouteName: 'Login' }
)

export default createAppContainer(Router)
