import { useRouter } from "next/dist/client/router";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../../components/material/Dashboard";
import { AppDispatch, RootState } from "../../../provider";
import styles from "../product.module.css";
import { ProductItem } from "../../../provider/modules/product";
import { requestModifyProduct } from "../../../middleware/modules/product";

const Products = () => {
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
  const router = useRouter();

  const id = router.query.id as string;

  const productItem = useSelector((state: RootState) =>
    state.product.data.find((item) => item.productId === +id)
  );
  const product = useSelector((state: RootState) => state.product);
  const [image, setImage] = useState(
    productItem && productItem.productImageUrl
  );

  const [isEdit, setIsEdit] = useState(false);

  const edit = () => {
    if (isEdit === false) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (product.data.length === 0) {
      router.push(`/product`);
    }
  }, [product]);

  const save = (item: ProductItem) => {
    dispatch(requestModifyProduct(item));
  };

  const changeImg = () => {
    if (productImageInput.current?.files?.length) {
      const imageFile = productImageInput.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result ? reader.result?.toString() : "");
      };

      reader.readAsDataURL(imageFile);
    }
  };

  const saveClick = () => {
    const productName = productNameInput.current.value;
    const productPrice = productPriceInput.current.value;

    const productInfo = productDescText.current.value;
    const foodType = foodTypeSelect.current.value;
    const expirationData = expirationDataInput.current.value;
    const manufacturer = manufacturerInput.current.value;
    const manufacturingDate = manufacturingDateSelect.current.value;
    const beanType = beanTypeSelect.current.value;
    const beanTag = beanTagSelect.current.value;
    const processing = processingSelect.current.value;
    const country = countryInput.current.value;
    const region = regionInput.current.value;
    const farm = farmInput.current.value;
    const cupNote = cupNoteInput.current.value;
    const roastingPoint = roastionPointSelect.current.value;
    const variety = varietyInput.current.value;

    if (productImageInput.current?.files?.length) {
      const imageFile = productImageInput.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (productItem) {
          const item = { ...productItem };

          item.productName = productName;
          item.productPrice = +productPrice;
          item.productImageUrl = reader.result ? reader.result?.toString() : "";
          item.productInfo = productInfo;
          item.fileName = imageFile.name;
          item.fileType = imageFile.type;
          item.foodType = foodType;
          item.expirationData = expirationData;
          item.manufacturer = manufacturer;
          item.manufacturingDate = manufacturingDate;
          item.companyIntroduce = productItem.companyIntroduce
            ? productItem.companyIntroduce
            : "";
          item.companyAddress = productItem.companyAddress
            ? productItem.companyAddress
            : "";
          item.companyContact = productItem.companyContact
            ? productItem.companyContact
            : "";
          item.beanType = beanType;
          item.beanTag = beanTag;
          item.processing = processing;
          item.country = country;
          item.region = region;
          item.farm = farm;
          item.cupNote = cupNote;
          item.roastingPoint = roastingPoint;
          item.variety = variety;

          console.log(item);
          save(item);
        }
      };
      reader.readAsDataURL(imageFile);
      setIsEdit(false);
    } else {
      if (productItem) {
        const item = { ...productItem };

        item.productName = productName;
        item.productPrice = +productPrice;
        item.productInfo = productInfo;
        item.foodType = foodType;
        item.expirationData = expirationData;
        item.manufacturer = manufacturer;
        item.manufacturingDate = manufacturingDate;
        item.companyIntroduce = productItem.companyIntroduce
          ? productItem.companyIntroduce
          : "";
        item.companyAddress = productItem.companyAddress
          ? productItem.companyAddress
          : "";
        item.companyContact = productItem.companyContact
          ? productItem.companyContact
          : "";
        item.beanType = beanType;
        item.beanTag = beanTag;
        item.processing = processing;
        item.country = country;
        item.region = region;
        item.farm = farm;
        item.cupNote = cupNote;
        item.roastingPoint = roastingPoint;
        item.variety = variety;

        console.log(item);
        save(item);
      }
      setIsEdit(false);
    }
  };

  return (
    <DashboardContent>
      <article style={{ width: "85%" }} className="mx-auto ps-5">
        <section>
          <div className="justify-content-md-center w-75">
            <div className={`${styles.div}`}>
              <h1 className="mb-3">제품 상세</h1>
              {isEdit === false ? (
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    edit();
                  }}
                >
                  수정
                </button>
              ) : (
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    edit();
                  }}
                >
                  취소
                </button>
              )}
            </div>
            <form className="ps-5">
              <table
                className="table"
                style={{
                  borderRadius: "15px",
                }}
              >
                {isEdit === false ? (
                  <tbody>
                    <tr>
                      <th>제품명</th>
                      <td>{productItem && productItem?.productName}</td>
                    </tr>
                    <tr>
                      <th>단가</th>
                      <td>{productItem && productItem?.productPrice}</td>
                    </tr>
                    <tr>
                      <th>원두설명</th>
                      <td>{productItem && productItem?.productInfo}</td>
                    </tr>
                    <tr>
                      <th>상품사진</th>
                      <td>
                        <img
                          style={{ width: "400px", height: "400px" }}
                          src={productItem && productItem.productImageUrl}
                          alt={productItem && productItem?.productName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>업장명</th>
                      <td>{productItem && productItem.companyName}</td>
                    </tr>
                    <tr>
                      <th>원두타입</th>
                      <td>{productItem && productItem?.beanType}</td>
                    </tr>
                    <tr>
                      <th>원두 태그</th>
                      <td>{productItem && productItem?.beanTag}</td>
                    </tr>
                    <tr>
                      <th>생두 가공방식</th>
                      <td>{productItem && productItem?.processing}</td>
                    </tr>
                    <tr>
                      <th>원산지</th>
                      <td>{productItem && productItem?.country}</td>
                    </tr>
                    <tr>
                      <th>지역</th>
                      <td>{productItem && productItem?.region}</td>
                    </tr>
                    <tr>
                      <th>농장명</th>
                      <td>{productItem && productItem?.farm}</td>
                    </tr>
                    <tr>
                      <th>컵 노트</th>
                      <td>{productItem && productItem?.cupNote}</td>
                    </tr>
                    <tr>
                      <th>로스팅포인트</th>
                      <td>{productItem && productItem?.roastingPoint}</td>
                    </tr>
                    <tr>
                      <th>생두품종</th>
                      <td>{productItem && productItem?.variety}</td>
                    </tr>
                    <tr>
                      <th>식품종류</th>
                      <td>{productItem && productItem?.foodType}</td>
                    </tr>
                    <tr>
                      <th>제조원</th>
                      <td>{productItem && productItem.companyName}</td>
                    </tr>
                    <tr>
                      <th>제조일자</th>
                      <td>{productItem && productItem?.manufacturingDate}</td>
                    </tr>
                    <tr>
                      <th>유통기한</th>
                      <td>{productItem && productItem?.expirationData}</td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <th>제품명</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          ref={productNameInput}
                          defaultValue={
                            productItem
                              ? productItem?.productName
                              : productNameInput.current?.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem?.productPrice
                              : productPriceInput.current?.value
                          }
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
                            productItem
                              ? productItem?.productInfo
                              : productDescText.current.value
                          }
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th>상품사진</th>
                      <td>
                        <img
                          style={{ width: "400px", height: "400px" }}
                          src={image}
                          alt={productItem && productItem?.productName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>사진선택</th>
                      <td>
                        <input
                          className="form-control"
                          type="file"
                          accept="image/*"
                          ref={productImageInput}
                          onChange={() => {
                            changeImg();
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>업장명</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={productItem && productItem.companyName}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>원두타입</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          ref={beanTypeSelect}
                          defaultValue={
                            productItem
                              ? productItem?.beanType
                              : beanTypeSelect.current.value
                          }
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
                          ref={beanTagSelect}
                          defaultValue={
                            productItem
                              ? productItem?.beanTag
                              : beanTagSelect.current.value
                          }
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
                          ref={processingSelect}
                          defaultValue={
                            productItem
                              ? productItem?.processing
                              : processingSelect.current.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem?.country
                              : countryInput.current.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem?.region
                              : regionInput.current.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem?.farm
                              : farmInput.current.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem?.cupNote
                              : cupNoteInput.current.value
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>로스팅포인트</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          ref={roastionPointSelect}
                          defaultValue={
                            productItem
                              ? productItem?.roastingPoint
                              : roastionPointSelect.current.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem?.variety
                              : varietyInput.current.value
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>식품종류</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          ref={foodTypeSelect}
                          defaultValue={
                            productItem
                              ? productItem?.foodType
                              : foodTypeSelect.current.value
                          }
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
                          defaultValue={
                            productItem
                              ? productItem.companyName
                              : manufacturerInput.current.value
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>제조일자</th>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          ref={manufacturingDateSelect}
                          defaultValue={
                            productItem
                              ? productItem?.manufacturingDate
                              : manufacturingDateSelect.current.value
                          }
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
                            productItem
                              ? productItem?.expirationData
                              : expirationDataInput.current.value
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </form>
            {isEdit === true && (
              <div className={`${styles.div} d-flex flex-row-reverse`}>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    saveClick();
                  }}
                >
                  저장
                </button>
              </div>
            )}
          </div>
        </section>
      </article>
    </DashboardContent>
  );
};

export default Products;
