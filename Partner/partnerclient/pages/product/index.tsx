import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { AppDispatch, RootState } from "../../provider";
import Image from "next/image";
import {
  requestDeleteProduct,
  requestFetchProductsPaging,
  requestProductSalesChange,
  requestSemiModify,
} from "../../middleware/modules/product";
import styles from "./product.module.css";
import Pagination from "../../components/pagination";
import { editProduct, SemiModify } from "../../provider/modules/product";
import { useRouter } from "next/dist/client/router";

const ProductList = () => {
  const productNameInput = useRef<HTMLInputElement>(null);
  const productPriceInput = useRef<HTMLInputElement>(null);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const partner = useSelector((state: RootState) => state.partner);
  const product = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  const partnerId = partner.data.partnerId;

  const router = useRouter();

  const handlePageChanged = (page: number) => {
    console.log("--page: " + page);
    dispatch(
      requestFetchProductsPaging({
        partnerId,
        page,
        size: product.pageSize,
      })
    );
  };

  useEffect(() => {
    if (partner.data.partnerId > 0 && product.isFetched === false) {
      const productPageSize = localStorage.getItem("product_page_size");

      console.log("제품목록 패치");
      dispatch(
        requestFetchProductsPaging({
          partnerId: partner.data.partnerId,
          page: 0,
          size: productPageSize ? +productPageSize : product.pageSize,
        })
      );
    }
  }, [dispatch, partner.data.partnerId]);

  const edit = (id: number) => {
    const item = product.data.find((item) => item.productId === id);
    if (item) {
      dispatch(editProduct(id));
    }
  };

  const del = (id: number) => {
    dispatch(requestDeleteProduct(id));
  };

  const save = (id: number, index: number) => {
    const tr = tbodyRef.current?.querySelectorAll("tr")[index];
    const inputList = tr?.querySelectorAll("input");
    const inputArr = Array.prototype.slice.call(inputList);
    const productName = inputArr[0].value;
    const productPrice = inputArr[1].value;

    const data: SemiModify = {
      productId: id,
      productPrice: productPrice,
      productName: productName,
    };

    if (data) {
      dispatch(requestSemiModify(data));
    }
  };

  const productSalesChange = (id: number) => {
    const item = product.data.find((item) => item.productId === id);
    console.log(item);
    if (item) {
      const productId = item.productId;
      const partnerId = item.partnerId;
      dispatch(requestProductSalesChange({productId,partnerId}));
    }
  };

  return (
    <DashboardContent>
      <article style={{ width: "90%" }} className="mx-auto">
        <section>
          <div className={styles.div}>
            <h1 className="">제품 목록</h1>
            <button
              className="btn btn-primary"
              onClick={() => {
                router.push("/product/edit/create");
              }}
            >
              제품 등록
            </button>
          </div>

          <div className="d-flex justify-content-md-center mt-1">
            <table className="table  table-striped">
              <thead className=" align-items-center text-center">
                <tr>
                  <th scope="col fw-bolder">No</th>
                  <th scope="col fw-bolder">제품명</th>
                  <th scope="col fw-bolder">단가</th>
                  <th scope="col fw-bolder">제품사진</th>
                  <th scope="col fw-bolder">판매/중단</th>
                  <th scope="col fw-bolder">기능</th>
                  <th scope="col fw-bolder">판매상태</th>
                </tr>
              </thead>
              <tbody
                ref={tbodyRef}
                className="align-middle text-center justify-content-md-center flex-column"
              >
                {product.data.map((item, index) => (
                  <tr key={item.productId}>
                    <td
                      onClick={() => {
                        router.push(`/product/detail/${item.productId}`);
                      }}
                      className="fs-5 fw-bolder"
                    >
                      {item.productId}
                    </td>
                    {!item.isEdit && (
                      <td
                        onClick={() => {
                          router.push(`/product/detail/${item.productId}`);
                        }}
                        className="fs-5 fw-bolder"
                      >
                        {item.productName}
                      </td>
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
                      <td
                        className="fs-5 fw-bolder"
                        onClick={() => {
                          router.push(`/product/detail/${item.productId}`);
                        }}
                      >
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
                    <td
                      onClick={() => {
                        router.push(`/product/detail/${item.productId}`);
                      }}
                    >
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
                      {item.salesStatus === 0 ? (
                        <button
                          className="btn btn-success text-light"
                          onClick={() => {
                            productSalesChange(item.productId);
                          }}
                        >
                          개시
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary text-light"
                          onClick={() => {
                            productSalesChange(item.productId);
                          }}
                        >
                          중단
                        </button>
                      )}
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
                            save(item.productId, index);
                          }}
                        >
                          저장
                        </button>
                      )}

                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => {
                          del(item.productId);
                        }}
                      >
                        삭제
                      </button>
                    </td>
                    <td
                      className={styles.td}
                      onClick={() => {
                        router.push(`/product/detail/${item.productId}`);
                      }}
                    >
                      {item.salesStatus === 0 ? <p>판매대기</p> : <p>판매중</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
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
};;

export default ProductList;
