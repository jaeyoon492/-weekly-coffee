import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./modules/profile";
import alertReducer from "./modules/alert";
import progressReducer from "./modules/progress";
import memberReducer from "./modules/member";
import registrationReducer from "./modules/registration";
import partnerReducer from "./modules/partner";
import productReducer from "./modules/product";
import subscribeReducer from "./modules/subscribe";
import subscribeDetailReducer from "./modules/subscribeDetail";

// 최상위 사가
import rootSaga from "../middleware";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    alert: alertReducer,
    progress: progressReducer,
    product: productReducer,
    registration: registrationReducer,
    member: memberReducer,
    partner: partnerReducer,
    subscribe: subscribeReducer,
    subscribeDetail: subscribeDetailReducer,
  },

  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

// typesciprt에서는 몇가지 타입 선언을 해야함

// root state 타입 정의
// 가장 취상위 state
// state.profile, state.contact.....
export type RootState = ReturnType<typeof store.getState>;

// dispatch 타입 정의
// dispatch 함수의 generic type
export type AppDispatch = typeof store.dispatch;
