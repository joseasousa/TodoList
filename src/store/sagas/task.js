import { put } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import { Creators as TasksActions } from '../ducks/task'

export function * getTasks () {
  try {
    const response = yield AsyncStorage.getItem('task')
    console.tron.log('rerquest get', JSON.parse(response))
    yield put(TasksActions.getTasksSuccess(JSON.parse(response)))
  } catch (err) {
    yield put(TasksActions.getTasksFailure(err))
  }
}

export function * putTask (action) {
  try {
    const data = yield AsyncStorage.getItem('task')
    let newTask = JSON.parse(data)
    if (!newTask) {
      newTask = []
    }
    newTask.push({ ...action.payload.task, id: newTask.length })
    console.tron.log('persist', newTask)

    yield AsyncStorage.setItem('task', JSON.stringify(newTask))

    yield put(TasksActions.putTasksSuccess(newTask))
  } catch (err) {
    yield put(TasksActions.putTasksFailure(err))
  }
}
