import axios from "axios";

export interface RegistrationResponse {
  registrationId: number;
  memberId: number;
  companyName: string;
  businessRegistrationNumber: string;
  ceoName: string;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  companyEmail: string;
  bank: string;
  bankAccount: string;
  registrationDate: string;
}

export interface RegistrationRequest {
  memberId: number;
  companyName: string;
  businessRegistrationNumber: string;
  ceoName: string;
  companyIntroduce: string;
  companyAddress: string;
  companyContact: string;
  companyEmail: string;
  bank: string;
  bankAccount: string;
  registrationDate: string;
}

const registrationApi = {
  add: (registration: RegistrationRequest) =>
    axios.post<RegistrationResponse>(
      `http://localhost:8082/registration`,
      registration
    ),
};

export default registrationApi;
