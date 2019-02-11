import { all, takeLatest } from 'redux-saga/effects'

import { Types as AuthTypes } from '../ducks/auth'
import { login, logout, createProfile } from './auth'

export default function * rootSaga () {
  return yield all([
    takeLatest(AuthTypes.SIGNIN_REQUEST, login),
    takeLatest(AuthTypes.CREATE_PROFILE_REQUEST, createProfile),
    takeLatest(AuthTypes.SIGNOUT_REQUEST, logout)
  ])
}
