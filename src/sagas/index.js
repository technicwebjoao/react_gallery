import { put, takeLatest, all, call } from 'redux-saga/effects';
import { GET_PHOTOS, PHOTOS_RECEIVED } from '../types';
import { loadPagePhotos } from '../utils/api';

function* fetchPhotos({ page, limit }) {
  const response = yield call(loadPagePhotos, page, limit);
  const { photos, count } = response;
  yield put({ type: PHOTOS_RECEIVED, photos, count });
}
function* actionWatcher() {
  yield takeLatest(GET_PHOTOS, fetchPhotos)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
