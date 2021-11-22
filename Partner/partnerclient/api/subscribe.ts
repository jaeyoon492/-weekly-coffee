import axios from "axios";
import { SubscribePageResponse } from "../provider/modules/subscribe";

const subScribeApi = {
  fetch: (partnerId: number, page: number, size: number) =>
    axios.get<SubscribePageResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/partner/subscribes/paging/${partnerId}?page=${page}&size=${size}`
    ),

  check: (subscribeId: number) =>
    axios.put<boolean>(
      `${process.env.NEXT_PUBLIC_API_BASE}/subscribe/product/${subscribeId}`
    ),
};

export default subScribeApi;
