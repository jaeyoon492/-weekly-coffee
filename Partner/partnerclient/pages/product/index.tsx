import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import { RootState } from "../../provider";

const ProductItem = () => {
  const product = useSelector((state: RootState) => state.product);
  return (
    <>
      {product.map((item, index) => (
        <tr>
          <td>{index}</td>
          <td>{item.productName}</td>
          <td>{item.productPrice}</td>
          <td>{item.productImageId}</td>
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
    <Layout>
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
    </Layout>
  );
};

export default ProductList;
