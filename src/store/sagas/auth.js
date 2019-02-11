import { put } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import { Creators as ActionCreator } from '../ducks/auth'

export function * login (action) {
  const password = yield AsyncStorage.getItem('password')
  const { passwd } = action.payload

  if (password === passwd) {
    yield put(ActionCreator.signinSuccess())
  } else {
    yield put(ActionCreator.signinFailure('senha nao cadastrada'))
  }
}

export function * logout () {
  yield put(ActionCreator.signoutSuccess())
}

export function * createProfile (action) {
  const { passwd } = action.payload

  yield AsyncStorage.setItem('password', passwd)

  yield put(ActionCreator.createProfileSuccess())
}
