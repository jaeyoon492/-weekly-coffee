import { createAction, nanoid, PayloadAction } from "@reduxjs/toolkit";
import {
  addRegistration,
  initialIsComplted,
  RegistrationItem,
} from "../../provider/modules/registration";
import registrationReducer from "../../provider/modules/registration";
import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { endProgress, startProgress } from "../../provider/modules/progress";
import {
  RegistrationRequest,
  RegistrationResponse,
} from "../../api/registration";
import { AxiosResponse } from "axios";
import registrationApi from "../../api/registration";
import { addAlert } from "../../provider/modules/alert";
import { RootState } from "../../provider";

export const requestAddRegistration = createAction<RegistrationItem>(
  `${registrationReducer.name}/requestAddRegistration`
);

function* addRegistrationDataNext(action: PayloadAction<RegistrationItem>) {
  yield console.log("--addRegistrationDataNext--");

  try {
    // action의 payload로 넘어온 객체
    const registrationPayload = action.payload;

    // spinner 보여주기
    yield put(startProgress());

    const memberId: number = yield select(
      (state: RootState) => state.member.data.memberId
    );
    console.log(memberId);

    const registrationRequest: RegistrationRequest = {
      memberId: memberId,
      companyName: registrationPayload.companyName,
      businessRegistrationNumber:
        registrationPayload.businessRegistrationNumber,
      ceoName: registrationPayload.ceoName,
      companyIntroduce: registrationPayload.companyIntroduce,
      companyAddress: registrationPayload.companyAddress,
      companyContact: registrationPayload.companyContact,
      companyEmail: registrationPayload.companyEmail,
      bank: registrationPayload.bank,
      bankAccount: registrationPayload.bankAccount,
      registrationDate: registrationPayload.registrationDate,
    };

    const result: AxiosResponse<RegistrationResponse> = yield call(
      registrationApi.add,
      registrationRequest
    );
    /*-------------------------------------------------------- */

    // spinner 사라지게 하기
    yield put(endProgress());

    console.log(result.data);

    // ------ 2. redux state를 변경함
    // 백엔드에서 처리한 데이터 객체로 state를 변경할 payload 객체를 생성
    if (result) {
      const registration: RegistrationItem = {
        registrationId: result.data.registrationId,
        memberId: result.data.memberId,
        companyName: result.data.companyName,
        businessRegistrationNumber: result.data.businessRegistrationNumber,
        ceoName: result.data.ceoName,
        companyIntroduce: result.data.companyIntroduce,
        companyAddress: result.data.companyAddress,
        companyContact: result.data.companyContact,
        companyEmail: result.data.companyEmail,
        bank: result.data.bank,
        bankAccount: result.data.bankAccount,
        registrationDate: result.data.registrationDate,
      };
      yield put(addRegistration(registration));
    }

    yield put(initialIsComplted());
  } catch (e: any) {
    yield put(endProgress());

    yield put(
      addAlert({ id: nanoid(), variant: "danger", message: e.message })
    );
  }
}

export default function* registrationSaga() {
  yield takeEvery(requestAddRegistration, addRegistrationDataNext);
}
