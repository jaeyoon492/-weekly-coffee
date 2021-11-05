import Link from "next/link";
import React from "react";
import { Button, Table } from "react-bootstrap";
import styeld from "styled-components";
import Layout from "../../components/layout";

const ProductList = () => {
  return (
    <>
      <Layout>
        <article style={{ width: "90%" }} className="mx-auto mt-4">
          <section>
            <h1 className="">제품 목록</h1>
            <div className="d-flex justify-content-md-center mt-4">
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>고객님 성함</th>
                    <th>고객님 전화번호</th>
                    <th>고객님 ID</th>
                    <th>날짜</th>
                    <th>시간</th>
                    <th>작업</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>박진석</td>
                    <td>010-4462-0529</td>
                    <td>pjsjja458</td>
                    <td>2021-11-06</td>
                    <td>18:00</td>
                    <td style={{ width: "130px" }}></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default ProductList;
