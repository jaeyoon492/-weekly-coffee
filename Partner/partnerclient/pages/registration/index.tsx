import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import { RegistrationItem } from "../../provider/modules/registration";
import { requestAddRegistration } from "../../middleware/modules/registration";
import { useRouter } from "next/dist/client/router";
import DashboardContent from "../../components/material/Dashboard";

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

  const memberId = useSelector(
    (state: RootState) => state.member.data.memberId
  );

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
      memberId: memberId,
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
    dispatch(requestAddRegistration(item));
  };

  return (
    <>
      <DashboardContent>
        <article style={{ width: "85%" }} className="mx-auto mt-4 ps-5">
          <section>
            <h1 className="">입점신청</h1>
            <div className=" justify-content-md-center w-75  mt-4">
              <form className="ps-5">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>로스터리 이름</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={companyNameInput}
                          defaultValue={"프릳츠커피컴퍼니"}
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
                          defaultValue={"111-111-1111111"}
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
                          defaultValue={"박근하"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>로스터리 소개</th>
                      <td>
                        <textarea
                          className="form-control"
                          ref={companyIntroduceText}
                          defaultValue={
                            "프릳츠의 탄생은 신선한 원두를 찾아내어 로스팅하고 다양한 맛의 커피를 테스팅하길 좋아하는 커피업계 종사자와 학창 시절부터 제빵의 길을 걷던 제빵업계 종사자 여섯 명이 공동 창업한 회사이다"
                          }
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
                          defaultValue={
                            "서울특별시 마포구 마포대로 156 공덕푸르지오시티 1층 107호"
                          }
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
                          defaultValue={"010-2222-2222"}
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
                          defaultValue={"aaaaa@gmail.com"}
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
                          defaultValue={"은행을 선택해주세요."}
                        >
                          <option value="은행을 선택해주세요." disabled>
                            은행을 선택해주세요.
                          </option>
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
                          defaultValue={"111-222-3333333"}
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
                          defaultValue={"2021-11-04"}
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
      </DashboardContent>
    </>
  );
};
export default Registration;
