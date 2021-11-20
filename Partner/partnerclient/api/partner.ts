import axios from "axios";
import { ProductResponse } from "../provider/modules/product";
import { Subscribe } from "../provider/modules/subscribe";

export interface PartnerResponse {
  partnerId: number;
  memberId: number;
  businessRegistrationNumber: string;
  ceoName: string;
  companyName: string;
  companyContact: string;
  companyAddress: string;
  companyIntroduce: string;
  companyEmail: string;
  products: ProductResponse[];
  subscribes: Subscribe[];
}

const partnerApi = {
  fetch: (partnerId: number) =>
    axios.get<PartnerResponse>(`${process.env.NEXT_PUBLIC_API_BASE}/partner/${partnerId}`),
};

export default partnerApi;