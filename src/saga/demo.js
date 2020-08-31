import { takeEvery, all, call, put, select } from 'redux-saga/effects';
import { types as demoTypes, actions as demoActions } from '@/ducks/demo';
import { get } from '@/services/api';

export default function* demoSaga() {
  yield all([
    takeEvery(demoTypes.DEMO_ASYNC, function* (...a) {
      //当前store
      const store = yield select()
      console.log(store);
      //异步请求
      const result = yield call(() => {
        return get()
      })
      // 触发actions
      yield put(demoActions.demoSetList(result))
    }),
  ]);
}
