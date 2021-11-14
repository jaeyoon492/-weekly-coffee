import { fork } from "redux-saga/effects";
import memberSaga from "./modules/member";
import partnerSaga from "./modules/partner";
import registrationSaga from "./modules/registration";
import productSaga from "./modules/product";
import subscribeSaga from "./modules/subscribe";

export default function* rootSaga() {
  yield fork(registrationSaga);
  yield fork(memberSaga);
  yield fork(partnerSaga);
  yield fork(productSaga);
  yield fork(subscribeSaga);
}
