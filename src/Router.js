import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from 'pages/Login';
import TaskScreen from 'pages/Tasks';

const Router = createDrawerNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Task: {
      screen: TaskScreen,
    },
  },
  { initialRouteName: 'Login' },
);

export default createAppContainer(Router);
