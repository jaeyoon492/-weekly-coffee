import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./modules/alert";
import progressReducer from "./modules/progress";
import memberReducer from "./modules/member";
import registrationReducer from "./modules/registration";
import partnerReducer from "./modules/partner";
import productReducer from "./modules/product";
import subscribeReducer from "./modules/subscribe";
import subscribeDetailReducer from "./modules/subscribeDetail";

import rootSaga from "../middleware";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
