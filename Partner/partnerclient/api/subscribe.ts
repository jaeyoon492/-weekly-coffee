import axios from "axios";
import { SubscribePageResponse } from "../provider/modules/subscribe";

const subScribeApi = {
  fetch: (partnerId: number, page: number, size: number) =>
    axios.get<SubscribePageResponse>(
      `http://localhost:8082/partner/subscribes/paging/${partnerId}?page=${page}&size=${size}`
    ),
};

export default subScribeApi;
