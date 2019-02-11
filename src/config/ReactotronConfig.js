import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'

import { reactotronRedux } from 'reactotron-redux'

let tron

if (__DEV__) {
  tron = Reactotron.configure({ name: 'Todo List' })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

  tron.clear()

  global.console.tron = tron
}

export default tron
