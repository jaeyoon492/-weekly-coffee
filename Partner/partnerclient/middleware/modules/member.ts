import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { createAction, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { MemberResponse } from "../../api/member";
import memberReducer, {
  fetchMember,
  Member,
} from "../../provider/modules/member";
import api from "../../api/member";
import { addAlert } from "../../provider/modules/alert";
import { RootState } from "../../provider";
import { requestFetchPartner } from "./partner";

export const requestFetchMember = createAction<number>(
  `${memberReducer.name}/requestFetchMember`
);

function* fetchMemberDataNext(action: PayloadAction<number>) {
  //   const stateId: number = yield select(
  //     (state: RootState) => state.member.memberId
  //   );
  const memberId = action.payload;
  const partnerId: number = yield select(
    (state: RootState) => state.member.data.partner?.partnerId
  );

  if (partnerId !== 0) {
    yield put(requestFetchPartner(partnerId));
    return;
  }

  try {
    const result: AxiosResponse<MemberResponse> = yield call(
      api.fetch,
      memberId
    );
    const memberData = result.data;

    // 받아온 페이지 데이터를 Payload 변수로 변환
    const member: Member = {
      memberId: memberData.memberId,
      name: memberData.name,
      partnerState: memberData.partnerState,
      partner: memberData.partner,
    };

    yield put(fetchMember(member));
  } catch (e: any) {
    yield put(
      addAlert({
        id: nanoid(),
        variant: "danger",
        message: "해당 멤버가 없습니다",
      })
    );
  }
}

export default function* memberSaga() {
  yield takeLatest(requestFetchMember, fetchMemberDataNext);
}
