import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../../components/material/Dashboard";
import { requestFetchMember } from "../../../middleware/modules/member";
import { requestFetchPartner } from "../../../middleware/modules/partner";
import { AppDispatch, RootState } from "../../../provider";
import member from "../../../provider/modules/member";
import { ProductItem } from "../../../provider/modules/product";

const ProductCreate = () => {
  const productNameInput = useRef<HTMLInputElement>(null);
  const productPriceInput = useRef<HTMLInputElement>(null);
  const productDescText = useRef<HTMLTextAreaElement>(null);
  const productImageInput = useRef<HTMLInputElement>(null);
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
  const manufacturingDateSelect = useRef<HTMLSelectElement>(null);
  const expirationDataInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const partner = useSelector((state: RootState) => state.partner);
  const partnerId = useSelector(
    (state: RootState) => state.member.partner.partnerId
  );

  console.log(partnerId);

  useEffect(() => {
    dispatch(requestFetchMember(1));
  }, [partnerId]);

  const handleAddClick = () => {
    if (productImageInput.current?.files?.length) {
      const imageFile = productImageInput.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const data: ProductItem = {
          productId: partner.products?.length
            ? partner.products[0].productId + 1
            : 1,
          partnerId: partner.partnerId,
          productName: productNameInput.current
            ? productNameInput.current.value
            : "",
          productPrice: productPriceInput.current
            ? +productPriceInput.current.value
            : 0,
          productImageUrl: reader.result ? reader.result?.toString() : "",
          foodType: foodTypeSelect.current ? foodTypeSelect.current.value : "",
          expirationData: expirationDataInput.current
            ? expirationDataInput.current.value
            : "",
          manufacturer: manufacturerInput.current
            ? manufacturerInput.current.value
            : "",
          manufacturingDate: manufacturingDateSelect.current
            ? manufacturingDateSelect.current.value
            : "",
          companyName: partner.companyName,
          companyIntroduce: partner.companyIntroduce,
          companyAddress: partner.companyAddress,
          companyContact: partner.companyContact,
          beanType: beanTypeSelect.current ? beanTypeSelect.current.value : "",
          beanTag: beanTagSelect.current ? beanTagSelect.current.value : "",
          processing: processingSelect.current
            ? processingSelect.current.value
            : "",
          country: countryInput.current ? countryInput.current.value : "",
          region: regionInput.current ? regionInput.current.value : "",
          farm: farmInput.current ? farmInput.current.value : "",
          cupNote: cupNoteInput.current ? cupNoteInput.current.value : "",
          roastingPoint: roastionPointSelect.current
            ? roastionPointSelect.current.value
            : "",
          variety: varietyInput.current ? varietyInput.current.value : "",
        };
      };
    }
  };

  return (
    <DashboardContent>
      <article style={{ width: "85%" }} className="mx-auto ps-5">
        <section>
          <h1 className="">제품 등록</h1>
          <div className="justify-content-md-center w-75  mt-4">
            <form className="ps-5">
              <table
                className="table"
                style={{
                  borderRadius: "15px",
                }}
              >
                <tbody>
                  <tr>
                    <th>제품명</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={productNameInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>단가</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={productPriceInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>원두설명</th>
                    <td>
                      <textarea
                        className="form-control"
                        ref={productDescText}
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
                        ref={productImageInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>업장명</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={partner.companyName}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>원두타입</th>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"--"}
                        ref={beanTypeSelect}
                      >
                        <option value="--" disabled>
                          원두타입을 골라주세요.
                        </option>
                        <option value="블랜드">블랜드</option>
                        <option value="싱글오리진">싱글오리진</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>원두 태그</th>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"--"}
                        ref={beanTagSelect}
                      >
                        <option value="--" disabled>
                          태그를 골라주세요.
                        </option>
                        <option value="달콤">달콤</option>
                        <option value="고소">고소</option>
                        <option value="상큼">상큼</option>
                        <option value="초콜릿">초콜릿</option>
                        <option value="밸런스">밸런스</option>
                        <option value="꽃향기">꽃향기</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>생두 가공방식</th>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"--"}
                        ref={processingSelect}
                      >
                        <option value="--" disabled>
                          가공방식을 골라주세요.
                        </option>
                        <option value="내추럴">내추럴</option>
                        <option value="워시드">워시드</option>
                        <option value="허니">허니</option>
                        <option value="펄프드내추럴">펄프드내추럴</option>
                        <option value="세미워시드">세미워시드</option>
                        <option value="무산소 발효">무산소 발효</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>원산지</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={countryInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>지역</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={regionInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>농장명</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={farmInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>컵 노트</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={cupNoteInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>로스팅포인트</th>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"--"}
                        ref={roastionPointSelect}
                      >
                        <option value="--" disabled>
                          로스팅포인트를 골라주세요.
                        </option>
                        <option value="라이트">라이트</option>
                        <option value="라이트 미디엄">라이트 미디엄</option>
                        <option value="미디엄">미디엄</option>
                        <option value="미디엄 다크">미디엄 다크</option>
                        <option value="다크">다크</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>생두품종</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={varietyInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>식품종류</th>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"--"}
                        ref={foodTypeSelect}
                      >
                        <option value="--" disabled>
                          메뉴를 골라주세요.
                        </option>
                        <option value="원두">원두</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>제조원</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={manufacturerInput}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>제조일자</th>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"--"}
                        ref={manufacturingDateSelect}
                      >
                        <option value="--" disabled>
                          메뉴를 골라 주세요
                        </option>
                        <option value="제조일 별도 표기">
                          제조일 별도 표기
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>유통기한</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        ref={expirationDataInput}
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
  );
};

export default ProductCreate;
