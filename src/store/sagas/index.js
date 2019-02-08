import { all, takeLatest } from 'redux-saga/effects';

import { Types as MarkerTypes } from 'store/ducks/markers';
import { addMarkerRequest } from './markers';

export default function* rootSaga() {
  return yield all([takeLatest(
    MarkerTypes.ADD_REQUEST,
    addMarkerRequest,
  ),
  ]);
}
