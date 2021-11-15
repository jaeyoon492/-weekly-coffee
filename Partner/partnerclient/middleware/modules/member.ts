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
import partner, { Partner } from "../../provider/modules/partner";
import { ProductItem, ProductState } from "../../provider/modules/product";
import { requestFetchProductsPaging } from "./product";

export const requestFetchMember = createAction<number>(
  `${memberReducer.name}/requestFetchMember`
);

export const requestRefreshFetchAll = createAction(
  `${memberReducer.name}/requestRefreshFetchAll`
);

function* fetchMemberDataNext(action: PayloadAction<number>) {
  yield console.log("-- fetchMember --");
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

    if (member.partner !== null) {
      yield put(requestFetchPartner(memberData.partner.partnerId));
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

  const partner: Partner = yield select(
    (state: RootState) => state.partner.data
  );

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
