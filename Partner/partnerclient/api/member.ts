import axios from "axios";
import { Partner } from "../provider/modules/partner";
import { PartnerResponse } from "./partner";

export interface MemberResponse {
  memberId: number;
  name: string;
  partnerState: boolean;
  partner: PartnerResponse;
}

const MemberApi = {
  fetch: (memberId: number) =>
    axios.get<MemberResponse>(`http://localhost:8082/members/${memberId}`),
};

export default MemberApi;
