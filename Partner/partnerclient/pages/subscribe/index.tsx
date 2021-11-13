import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { getTimeString } from "../../lib/string";
import { requestFetchSubscribe } from "../../middleware/modules/subscribe";
import { AppDispatch, RootState } from "../../provider";
import styles from "../product/product.module.css";

const Subscribe = () => {
  const subscribe = useSelector((state: RootState) => state.subscribe);
  const dispatch = useDispatch<AppDispatch>();
  const partner = useSelector((state: RootState) => state.partner);

  useEffect(() => {
    if (partner.data.partnerId > 0 && !subscribe.isFetched) {
      const subscribePageSize = localStorage.getItem("subscribe_page_size");

      console.log("주문 정보 조회");
      dispatch(
        requestFetchSubscribe({
          partnerId: partner.data.partnerId,
          page: 0,
          size: subscribePageSize ? +subscribePageSize : subscribe.pageSize,
        })
      );
    }
  }, [dispatch, partner.data.partnerId, subscribe.isFetched]);

  return (
    <>
      <DashboardContent>
        <article style={{ width: "90%" }} className="mx-auto mt-4">
          <section>
            <div className="w-75 mx-auto  mt-2">
              <h1 className="">주문 목록</h1>
              {subscribe.data.map((item, index) => (
                <div className="mt-5 border border-2 border-success">
                  <Card key={index}>
                    <Card.Header as="h5">주문이요!</Card.Header>
                    <Card.Body>
                      <Card.Title>주문자: {item.subscriberName}</Card.Title>
                      <Card.Text>
                        주소: {item.location}
                        <br />
                        연락처: {item.subscriberPhone}
                        <br />
                        제품명: {item.details.map((item) => item.productName)}
                        <br />
                        분쇄도: {item.details.map((item) => item.groundPoint)}
                        <br />
                        주문수량:{" "}
                        {item.details.map((item) => item.orderQuantity) + "개"}
                        <br />
                        구독기간:{" "}
                        {item.details.map((item) => item.term) + "개월"}
                        <br />
                        주문시각: {getTimeString(item.createdTime)}
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
              {!subscribe.isLast && (
                <div
                  className={`${styles.div} d-flex justify-content-center mt-4`}
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        requestFetchSubscribe({
                          partnerId: partner.data.partnerId,
                          page: subscribe.page + 1,
                          size: subscribe.pageSize,
                        })
                      );
                    }}
                  >
                    더보기
                  </button>
                  {/* <a
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        requestFetchSubscribe({
                          partnerId: partner.data.partnerId,
                          page: subscribe.page + 1,
                          size: subscribe.pageSize,
                        })
                      );
                    }}
                    className="link-secondary fs-6 text-nowrap"
                  >
                    더보기
                  </a> */}
                </div>
              )}
            </div>
          </section>
        </article>
      </DashboardContent>
    </>
  );
};

export default Subscribe;
