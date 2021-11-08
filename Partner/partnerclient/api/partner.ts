import axios from "axios";
import { ProductItem } from "../provider/modules/product";
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
  products: ProductItem[];
  subscribes: Subscribe[];
}

const partnerApi = {
  fetch: (partnerId: number) =>
    axios.get<PartnerResponse>(`http://localhost:8082/test/${partnerId}`),
};

export default partnerApi;
