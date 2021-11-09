import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { requestFetchMember } from "../../middleware/modules/member";
import { AppDispatch, RootState } from "../../provider";
import Image from "next/image";
import { requestFetchPartner } from "../../middleware/modules/partner";
import {
  requestFetchProductsPaging,
  requestSemiModify,
} from "../../middleware/modules/product";
import styles from "./product.module.css";
import Pagination from "../../components/pagination";
import { Edit } from "@mui/icons-material";
import {
  editDone,
  editProduct,
  SemiModify,
} from "../../provider/modules/product";

const ProductItem = () => {
  const productNameInput = useRef<HTMLInputElement>(null);
  const productPriceInput = useRef<HTMLInputElement>(null);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const partnerId = useSelector(
    (state: RootState) => state.member.data.partner?.partnerId
  );
  const product = useSelector((state: RootState) => state.product);
  const partner = useSelector((state: RootState) => state.partner);

  function memberFetch() {
    dispatch(requestFetchMember(1));
  }
  function partnerFetch() {
    if (partnerId) {
      dispatch(requestFetchPartner(partnerId));
    }

    if (!partner.isProductFetched) {
      const productPageSize = localStorage.getItem("product_page_size");

      dispatch(
        requestFetchProductsPaging({
          partnerId: partner.data.partnerId,
          page: 0,
          size: productPageSize ? +productPageSize : product.pageSize,
        })
      );
    }
  }

  function start() {
    console.log("제품목록 화면 멤버패치");
    memberFetch();
    console.log("제품목록 화면 파트너 패치");
    partnerFetch();
  }
  useEffect(() => {
    start();
  }, []);

  const edit = (id: number) => {
    const item = product.data.find((item) => item.productId === id);
    console.log(item);
    console.log(id);
    if (item) {
      dispatch(editProduct(id));
    }
  };

  const save = async (id: number) => {
    console.log(id);
    const data: SemiModify = {
      productId: id,
      productName: productNameInput.current
        ? productNameInput.current?.value
        : "",
      productPrice: productPriceInput.current
        ? +productPriceInput.current.value
        : 0,
    };
    console.log("수정 시작");
    dispatch(requestSemiModify(data));
    dispatch(editDone(id));
    console.log("수정 끝");
  };

  return (
    <>
      {product.data.map((item) => (
        <tbody
          ref={tbodyRef}
          className="align-middle text-center justify-content-md-center flex-column"
        >
          <tr key={item.productId}>
            <td className="fs-5 fw-bolder">{item.productId}</td>
            {!item.isEdit && (
              <td className="fs-5 fw-bolder">{item.productName}</td>
            )}
            {item.isEdit && (
              <td>
                <input
                  type="text"
                  className="w-100"
                  defaultValue={item.productName}
                  ref={productNameInput}
                />
              </td>
            )}
            {!item.isEdit && (
              <td className="fs-5 fw-bolder">
                {new Intl.NumberFormat().format(item.productPrice)}원
              </td>
            )}
            {item.isEdit && (
              <td>
                <input
                  type="text"
                  className="w-100"
                  defaultValue={item.productPrice}
                  ref={productPriceInput}
                />
              </td>
            )}
            <td>
              <Image
                src={item.productImageUrl}
                className="card-img-top"
                alt={item.productName}
                layout="responsive"
                objectFit="cover"
                /* ------------------------------- */
                width={50}
                height={50}
              />
            </td>
            <td className={styles.td}>
              <button className="btn btn-success">개시</button>
              <button className="btn btn-primary ms-2 ">중단</button>
            </td>
            <td className={styles.td}>
              {!item.isEdit && (
                <button
                  className="btn btn-warning "
                  onClick={() => {
                    edit(item.productId);
                  }}
                >
                  수정
                </button>
              )}
              {item.isEdit && (
                <button
                  className="btn btn-secondary "
                  onClick={() => {
                    save(item.productId);
                  }}
                >
                  저장
                </button>
              )}

              <button className="btn btn-danger ms-2 ">삭제</button>
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product);
  const partnerId = useSelector(
    (state: RootState) => state.partner.data.partnerId
  );

  const handlePageChanged = (page: number) => {
    console.log("--page: " + page);
    // setCurrentPage(page);
    dispatch(
      requestFetchProductsPaging({
        partnerId,
        page,
        size: product.pageSize,
      })
    );
  };

  return (
    <DashboardContent>
      <article style={{ width: "90%" }} className="mx-auto">
        <section>
          <h1 className="">제품 목록</h1>
          <div className="d-flex justify-content-md-center mt-4">
            <table className="table  table-striped">
              <thead className=" align-items-center text-center">
                <tr>
                  <th scope="col fw-bolder">No</th>
                  <th scope="col fw-bolder">제품명</th>
                  <th scope="col fw-bolder">단가</th>
                  <th scope="col fw-bolder">제품사진</th>
                  <th scope="col fw-bolder">판매상태</th>
                  <th scope="col fw-bolder">기능</th>
                </tr>
              </thead>
              <ProductItem />
            </table>
          </div>
        </section>
        <div className="d-flex justify-content-center">
          <Pagination
            blockSize={1} // 고정값
            totalPages={product.totalPages}
            currentPage={product.page}
            onPageChanged={handlePageChanged}
          />
        </div>
      </article>
    </DashboardContent>
  );
};

export default ProductList;
