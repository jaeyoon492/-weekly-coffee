import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { requestFetchMember } from "../../middleware/modules/member";
import { AppDispatch, RootState } from "../../provider";

const ProductItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product);
  // useEffect(() => {
  //   dispatch(requestFetchMember(1));
  // }, []);

  return (
    <>
      {product.map((item, index) => (
        <tr>
          <td>{index}</td>
          <td>{item.productName}</td>
          <td>{item.productPrice}</td>
          <td>{item.productImageUrl}</td>
          <td>
            <button className="btn btn-primary">
              <i className="bi bi-plus" />
              판매개시
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-plus" />
              판매중단
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              <i className="bi bi-plus" />
              수정
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-plus" />
              삭제
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

const ProductList = () => {
  return (
    <DashboardContent>
      <article style={{ width: "90%" }} className="mx-auto mt-4">
        <section>
          <h1 className="">제품 목록</h1>
          <div className="d-flex justify-content-md-center mt-4">
            <table className="table  table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">제품명</th>
                  <th scope="col">단가</th>
                  <th scope="col">제품사진</th>
                  <th scope="col">판매상태</th>
                  <th scope="col">기능</th>
                </tr>
              </thead>
              <tbody>
                <ProductItem />
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </DashboardContent>
  );
};

export default ProductList;
