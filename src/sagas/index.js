import { put, takeLatest, all, call } from 'redux-saga/effects';
import { GET_PHOTOS, PHOTOS_RECEIVED } from '../types';
import { loadPagePhotos } from '../utils/api';

export function* fetchPhotos({ page, limit }) {
  try {
    const response = yield call(loadPagePhotos, page, limit);
    if (!response) {
      throw new Error('Unknow error');
    }

    const { photos, count } = response;
    yield put({ type: PHOTOS_RECEIVED, photos, count });
  } catch (error) {
    const photos = [];
    const count = 0;
    yield put({ type: PHOTOS_RECEIVED, photos, count });
  }
}
function* actionWatcher() {
  yield takeLatest(GET_PHOTOS, fetchPhotos)
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
