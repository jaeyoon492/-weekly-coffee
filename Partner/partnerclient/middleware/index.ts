import { fork } from "redux-saga/effects";
import memberSaga from "./modules/member";
import partnerSaga from "./modules/partner";
import registrationSaga from "./modules/registration";
import productSaga from "./modules/product";

// 최상위의 Saga(generator 함수)를 내보기함
// 그 하위, photoSaga, contactSaga
// 기능별 각각의 saga action별로 처리할 saga들을 넣어줌
export default function* rootSaga() {
  // 비동기로 하위 사가를 처리함
  // 각각 하위사가가 다른 실행 컨텍스트에서 수행됨
  // yield fork(contactSaga);
  yield fork(registrationSaga);
  yield fork(memberSaga);
  yield fork(partnerSaga);
  yield fork(productSaga);
}
