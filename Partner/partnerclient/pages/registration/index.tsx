import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import { AppDispatch, RootState } from "../../provider";
import { RegistrationItem } from "../../provider/modules/registration";
import { requestAddRegistration } from "../../middleware/modules/registration";
import { useRouter } from "next/dist/client/router";

const Registration = () => {
  const companyNameInput = useRef<HTMLInputElement>(null);
  const businessRegistrationNumberInput = useRef<HTMLInputElement>(null);
  const ceoNameInput = useRef<HTMLInputElement>(null);
  const companyIntroduceText = useRef<HTMLTextAreaElement>(null);
  const companyAddressInput = useRef<HTMLInputElement>(null);
  const companyContactInput = useRef<HTMLInputElement>(null);
  const companyEmailInput = useRef<HTMLInputElement>(null);
  const bankSelect = useRef<HTMLSelectElement>(null);
  const bankAccountInput = useRef<HTMLInputElement>(null);
  const registrationDateInput = useRef<HTMLInputElement>(null);

  const isAddCompleted = useSelector(
    (state: RootState) => state.registration.isAddComplete
  );
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    isAddCompleted && router.push("/registration/complete");
  }, [isAddCompleted, router]);

  const handleAddClick = () => {
    const item: RegistrationItem = {
      companyName: companyNameInput.current
        ? companyNameInput.current.value
        : "",
      businessRegistrationNumber: businessRegistrationNumberInput.current
        ? businessRegistrationNumberInput.current.value
        : "",
      ceoName: ceoNameInput.current ? ceoNameInput.current.value : "",
      companyIntroduce: companyIntroduceText.current
        ? companyIntroduceText.current.value
        : "",
      companyAddress: companyAddressInput.current
        ? companyAddressInput.current.value
        : "",
      companyContact: companyContactInput.current
        ? companyContactInput.current.value
        : "",
      companyEmail: companyEmailInput.current
        ? companyEmailInput.current.value
        : "",
      bank: bankSelect.current ? bankSelect.current.value : "",
      bankAccount: bankAccountInput.current
        ? bankAccountInput.current.value
        : "",
      registrationDate: registrationDateInput.current
        ? registrationDateInput.current.value
        : "",
    };
    console.log("비동기 시작");
    dispatch(requestAddRegistration(item));
    console.log("비동기끝");
  };

  return (
    <>
      <Layout>
        <article style={{ width: "90%" }} className="mx-auto mt-4">
          <section>
            <h1 className="">입점신청</h1>
            <div className=" justify-content-md-center w-75  mt-4">
              <form>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>로스터리 이름</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={companyNameInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>사업자 등록번호</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={businessRegistrationNumberInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>대표자 이름</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={ceoNameInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>로스터리 소개</th>
                      <td>
                        <textarea
                          className="form-control"
                          ref={companyIntroduceText}
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>로스터리 주소</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={companyAddressInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>로스터리 연락처</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={companyContactInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>이메일</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={companyEmailInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>예금 은행</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          ref={bankSelect}
                        >
                          <option selected>선택해주세요.</option>
                          <option value="농협은행">농협은행</option>
                          <option value="국민은행">국민은행</option>
                          <option value="신한은행">신한은행</option>
                          <option value="하나은행">하나은행</option>
                          <option value="우리은행">우리은행</option>
                          <option value="카카오뱅크">카카오뱅크</option>
                          <option value="토스뱅크">토스뱅크</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>계좌번호</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={bankAccountInput}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>입점신청 날짜</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={registrationDateInput}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div>
                <button
                  className="btn btn-primary float-end"
                  onClick={() => {
                    handleAddClick();
                  }}
                >
                  <i className="bi bi-check" />
                  입접신청하기
                </button>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};
export default Registration;
