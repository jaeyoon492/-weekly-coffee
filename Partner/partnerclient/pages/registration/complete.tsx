import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestFetchMember } from "../../middleware/modules/member";
import { AppDispatch, RootState } from "../../provider";

const Complete = () => {
  const router = useRouter();
  const registration = useSelector((state: RootState) => state.registration);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(requestFetchMember(1));
  }, []);

  return (
    <div
      className="modal d-flex align-items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      onClick={() => {
        router.push("/");
      }}
    >
      <div className="modal-dialog w-50 ">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">입점신청 완료!</h3>
          </div>
          <div className="modal-body">
            <table className="table">
              <tbody>
                <tr>
                  <th>로스터리 이름</th>
                  <td>{registration.data.companyName}</td>
                </tr>
                <tr>
                  <th>대표자</th>
                  <td>{registration.data.ceoName}</td>
                </tr>
                <tr>
                  <th>사업자 등록번호</th>
                  <td>{registration.data.businessRegistrationNumber}</td>
                </tr>
                <tr>
                  <th>예금 은행</th>
                  <td>{registration.data.bank}</td>
                </tr>
                <tr>
                  <th>계좌번호</th>
                  <td>{registration.data.bankAccount}</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => {
                router.push("/");
              }}
              type="button"
              className="btn btn-secondary float-end"
            >
              메인으로!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
