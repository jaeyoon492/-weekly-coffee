import { createAction, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import partnerReducer, {
  fetchPartner,
  Partner,
} from "../../provider/modules/partner";
import { endProgress, startProgress } from "../../provider/modules/progress";
import api, { PartnerResponse } from "../../api/partner";
import { initialIsComplted } from "../../provider/modules/registration";
import { addAlert } from "../../provider/modules/alert";

export const requestFetchPartner = createAction<number>(
  `${partnerReducer.name}/requestFetchPartner`
);

function* fetchPartnerDataNext(action: PayloadAction<number>) {
  yield console.log("-- fetchPartner --");

  const partnerId = action.payload;

  try {
    yield put(startProgress());

    const result: AxiosResponse<PartnerResponse> = yield call(
      api.fetch,
      partnerId
    );

    yield put(endProgress());

    if (result) {
      const data: Partner = {
        partnerId: result.data.partnerId,
        memberId: result.data.memberId,
        businessRegistrationNumber: result.data.businessRegistrationNumber,
        ceoName: result.data.ceoName,
        companyName: result.data.companyName,
        companyContact: result.data.companyContact,
        companyAddress: result.data.companyAddress,
        companyIntroduce: result.data.companyIntroduce,
        companyEmail: result.data.companyEmail,
        products: result.data.products,
        subscribes: result.data.subscribes,
      };
      yield put(fetchPartner(data));
    }

    yield put(initialIsComplted());
  } catch (e: any) {
    yield put(endProgress());
    yield put(
      addAlert({ id: nanoid(), variant: "danger", message: e.message })
    );
  }
}

export default function* partnerSaga() {
  yield takeLatest(requestFetchPartner, fetchPartnerDataNext);
}
