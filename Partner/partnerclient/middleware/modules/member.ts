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
import { endProgress, startProgress } from "../../provider/modules/progress";
import { Partner } from "../../provider/modules/partner";
import { ProductItem, ProductState } from "../../provider/modules/product";
import { requestFetchProductsPaging } from "./product";

export const requestFetchMember = createAction<number>(
  `${memberReducer.name}/requestFetchMember`
);

export const requestRefreshFetchAll = createAction<number>(
  `${memberReducer.name}/requestRefreshFetchAll`
);

function* fetchMemberDataNext(action: PayloadAction<number>) {
  const memberId = action.payload;

  try {
    yield put(startProgress());

    const result: AxiosResponse<MemberResponse> = yield call(
      api.fetch,
      memberId
    );

    yield put(endProgress());
    const memberData = result.data;

    const member: Member = {
      memberId: memberData.memberId,
      name: memberData.name,
      partnerState: memberData.partnerState,
      partner: memberData.partner,
    };

    yield put(fetchMember(member));

    const serializedState = sessionStorage.getItem("partner_id");
    if (serializedState === null) {
      return undefined;
    } else {
      yield put(requestFetchPartner(+JSON.parse(serializedState)));
    }
  } catch (e: any) {
    yield put(endProgress());
    yield put(
      addAlert({
        id: nanoid(),
        variant: "danger",
        message: "해당 멤버가 없습니다",
      })
    );
  }
}

function* refreshFetchAll() {
  const product: ProductState = yield select(
    (state: RootState) => state.product
  );
  const products = product.data;
  const mBspartner: Partner = yield select(
    (state: RootState) => state.member.data.partner
  );
  const partner: Partner = yield select(
    (state: RootState) => state.partner.data
  );

  if (mBspartner !== null && mBspartner.partnerId !== 0) {
    const serializedState = JSON.stringify(mBspartner.partnerId);
    sessionStorage.setItem("partner_id", serializedState);
  }

  if (
    partner.products.length > 0 &&
    products.length === 0 &&
    localStorage.getItem("product_page_size") !== undefined
  ) {
    const productPageSize = localStorage.getItem("product_page_size");

    yield console.log("제품목록 패치");
    yield put(
      requestFetchProductsPaging({
        partnerId: partner.partnerId,
        page: 0,
        size: productPageSize ? +productPageSize : product.pageSize,
      })
    );
  }
}

export default function* memberSaga() {
  yield takeLatest(requestFetchMember, fetchMemberDataNext);
  yield takeLatest(requestRefreshFetchAll, refreshFetchAll);
}
