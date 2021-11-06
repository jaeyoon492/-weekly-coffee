import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout";
import DashboardContent from "../../../components/material/Dashboard";
import { RootState } from "../../../provider";

const ProductCreate = () => {
  const productNameInput = useRef<HTMLInputElement>(null);
  const productPriceInput = useRef<HTMLInputElement>(null);
  const productDescText = useRef<HTMLTextAreaElement>(null);
  const productImageInput = useRef<HTMLInputElement>(null);
  const companyNameInput = useRef<HTMLInputElement>(null);
  const beanTypeSelect = useRef<HTMLSelectElement>(null);
  const beanTagSelect = useRef<HTMLSelectElement>(null);
  const processingSelect = useRef<HTMLSelectElement>(null);
  const countryInput = useRef<HTMLInputElement>(null);
  const regionInput = useRef<HTMLInputElement>(null);
  const farmInput = useRef<HTMLInputElement>(null);
  const cupNoteInput = useRef<HTMLInputElement>(null);
  const roastionPointSelect = useRef<HTMLSelectElement>(null);
  const varietyInput = useRef<HTMLInputElement>(null);
  const foodTypeSelect = useRef<HTMLSelectElement>(null);
  const manufacturerInput = useRef<HTMLInputElement>(null);
  const manufacturingDateInput = useRef<HTMLInputElement>(null);
  const expirationDataInput = useRef<HTMLInputElement>(null);

  const product = useSelector((state: RootState) => state.product);

  const handleAddClick = () => {
    if (productImageInput.current?.files?.length) {
      const imageFile = productImageInput.current.files[0];
      const reader = new FileReader();
    }
  };

  return (
    <>
      <DashboardContent>
        <article style={{ width: "85%" }} className="mx-auto mt-4">
          <section>
            <h1 className="">제품 등록</h1>
            <div className="justify-content-md-center w-75  mt-4">
              <form>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>제품명</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>단가</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>원두설명</th>
                      <td>
                        <textarea
                          className="form-control"
                          // ref={}
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>상품사진</th>
                      <td>
                        <input
                          className="form-control"
                          type="file"
                          accept="image/*"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>업장명</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>원두타입</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>원두타입을 골라주세요.</option>
                          <option value="1">블랜드</option>
                          <option value="2">싱글오리진</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>원두 태그</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>태그를 골라주세요.</option>
                          <option value="1">달콤</option>
                          <option value="2">고소</option>
                          <option value="3">상큼</option>
                          <option value="4">초콜릿</option>
                          <option value="5">밸런스</option>
                          <option value="6">꽃향기</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>생두 가공방식</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>가공방식을 골라주세요.</option>
                          <option value="1">내추럴</option>
                          <option value="2">워시드</option>
                          <option value="3">허니</option>
                          <option value="4">펄프드내추럴</option>
                          <option value="5">세미워시드</option>
                          <option value="6">무산소</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>원산지</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>지역</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>농장명</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>컵 노트</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>로스팅포인트</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>로스팅포인트를 골라주세요.</option>
                          <option value="1">라이트</option>
                          <option value="2">라이트 미디엄</option>
                          <option value="3">미디엄</option>
                          <option value="4">미디엄 다크</option>
                          <option value="5">다크</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>생두품종</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>식품종류</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>메뉴를 골라주세요.</option>
                          <option value="1">원두</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>제조원</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>제조일자</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>유통기한</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          // ref={}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div>
                <button
                  className="btn btn-secondary float-start"
                  // onClick={() => {
                  //   router.push("/photos");
                  // }}
                >
                  <i className="bi bi-grid-3x3-gap me-1"></i>
                  목록
                </button>
                <button
                  className="btn btn-primary float-end"
                  onClick={() => {
                    handleAddClick();
                  }}
                >
                  <i className="bi bi-check" />
                  저장
                </button>
              </div>
            </div>
          </section>
        </article>
      </DashboardContent>
    </>
  );
};

export default ProductCreate;
