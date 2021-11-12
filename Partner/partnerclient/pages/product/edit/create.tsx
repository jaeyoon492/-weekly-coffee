import router from "next/dist/client/router";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../../components/material/Dashboard";
import { requestAddProduct } from "../../../middleware/modules/product";

import { AppDispatch, RootState } from "../../../provider";
import { ProductItem } from "../../../provider/modules/product";

const ProductCreate = () => {
  const productNameInput = useRef() as MutableRefObject<HTMLInputElement>;
  const productPriceInput = useRef() as MutableRefObject<HTMLInputElement>;
  const productDescText = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const productImageInput = useRef() as MutableRefObject<HTMLInputElement>;
  const beanTypeSelect = useRef() as MutableRefObject<HTMLSelectElement>;
  const beanTagSelect = useRef() as MutableRefObject<HTMLSelectElement>;
  const processingSelect = useRef() as MutableRefObject<HTMLSelectElement>;
  const countryInput = useRef() as MutableRefObject<HTMLInputElement>;
  const regionInput = useRef() as MutableRefObject<HTMLInputElement>;
  const farmInput = useRef() as MutableRefObject<HTMLInputElement>;
  const cupNoteInput = useRef() as MutableRefObject<HTMLInputElement>;
  const roastionPointSelect = useRef() as MutableRefObject<HTMLSelectElement>;
  const varietyInput = useRef() as MutableRefObject<HTMLInputElement>;
  const foodTypeSelect = useRef() as MutableRefObject<HTMLSelectElement>;
  const manufacturerInput = useRef() as MutableRefObject<HTMLInputElement>;
  const manufacturingDateSelect =
    useRef() as MutableRefObject<HTMLSelectElement>;
  const expirationDataInput = useRef() as MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch<AppDispatch>();

  const partner = useSelector((state: RootState) => state.partner);

  const partnerId = useSelector(
    (state: RootState) => state.member.data.partner?.partnerId
  );
  const isAddCompleted = useSelector(
    (state: RootState) => state.product.isAddCompleted
  );

  useEffect(() => {
    isAddCompleted && router.push("/product");
  }, [isAddCompleted, router]);

  const handleAddClick = () => {
    if (productImageInput.current?.files?.length) {
      const imageFile = productImageInput.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const data: ProductItem = {
          productId: partner.data.products?.length
            ? partner.data.products[0].productId + 1
            : 1,
          partnerId: partner.data.partnerId,
          productName: productNameInput.current.value,
          productPrice: +productPriceInput.current.value,
          productImageUrl: reader.result ? reader.result?.toString() : "",
          productInfo: productDescText.current.value,
          fileName: imageFile.name,
          fileType: imageFile.type,
          foodType: foodTypeSelect.current.value,
          expirationData: expirationDataInput.current.value,
          manufacturer: manufacturerInput.current.value,
          manufacturingDate: manufacturingDateSelect.current.value,
          companyName: partner.data.companyName,
          companyIntroduce: partner.data.companyIntroduce,
          companyAddress: partner.data.companyAddress,
          companyContact: partner.data.companyContact,
          beanType: beanTypeSelect.current.value,
          beanTag: beanTagSelect.current.value,
          processing: processingSelect.current.value,
          country: countryInput.current.value,
          region: regionInput.current.value,
          farm: farmInput.current.value,
          cupNote: cupNoteInput.current.value,
          roastingPoint: roastionPointSelect.current.value,
          variety: varietyInput.current.value,
          salesStatus: 0,
        };
        dispatch(requestAddProduct(data));
      };
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <>
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
                          defaultValue={"에티오피아 예가체프 게르시"}
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
                          defaultValue={22000}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>원두설명</th>
                      <td>
                        <textarea
                          className="form-control"
                          ref={productDescText}
                          defaultValue={
                            "입안 가득 꽃향기가 전해집니다. 꿀에 절여진 딸기처럼 달고, 깔끔함을 느낄 수 있어요."
                          }
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
                          defaultValue={partner.data.companyName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>원두타입</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue={"블랜드"}
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
                          defaultValue={"달콤"}
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
                          defaultValue={"내추럴"}
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
                          defaultValue={"에티오피아"}
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
                          defaultValue={"예가체프"}
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
                          defaultValue={"게르시 소농들"}
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
                          defaultValue={"새콤한 산미"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>로스팅포인트</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue={"라이트 미디엄"}
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
                          defaultValue={"에티오피아 토착종"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>식품종류</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue={"원두"}
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
                          defaultValue={partner.data.companyName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>제조일자</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue={"제조일 별도 표기"}
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
                          defaultValue={
                            "제조일로부터 1년(권장기한 제조일로부터 1달)"
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div>
                <button
                  className="btn btn-secondary float-start"
                  onClick={() => {
                    router.push("/product");
                  }}
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
