import React from 'react'
import { AppLoading, Font } from 'expo'

import Container from 'App'
import 'config/ReactotronConfig'

class App extends React.Component {
  state = {
    isReady: false
  }

  async componentDidMount () {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),

      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })

    this.setState({ isReady: true })
  }

  render () {
    const { isReady } = this.state
    if (!isReady) {
      return <AppLoading />
    }
    return <Container />
  }
}
export default App
