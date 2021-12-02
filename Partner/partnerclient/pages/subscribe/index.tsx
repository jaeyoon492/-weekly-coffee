import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { getTimeString } from "../../lib/string";
import {
  requestFetchNextSubscribe,
  requestFetchSubscribe,
  requestRemoveProductInDetail,
} from "../../middleware/modules/subscribe";
import { AppDispatch, RootState } from "../../provider";
import { checkSubscribe } from "../../provider/modules/subscribe";
import styles from "../product/product.module.css";

const Subscribe = () => {
  const subscribe = useSelector((state: RootState) => state.subscribe);
  const dispatch = useDispatch<AppDispatch>();
  const partner = useSelector((state: RootState) => state.partner);

  useEffect(() => {
    if (partner.data.partnerId > 0) {
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
  }, [dispatch, partner.data.partnerId]);

  const checkSubscribe = (subscribeId: number) => {
    console.log(subscribeId);
    dispatch(requestRemoveProductInDetail(subscribeId));
  };

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
                    <Card.Header as="h3">
                      주문이요!{" "}
                      <button
                        className={`${styles.button} btn btn-primary ms-2 mt-0 float-end`}
                        onClick={() => {
                          checkSubscribe(item.subscribeId);
                        }}
                      >
                        주문접수
                      </button>{" "}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>주문자: {item.subscriberName}</Card.Title>
                      <Card.Text>
                        주소: {item.location}
                        <br />
                        연락처: {item.subscriberPhone}
                        <br />
                        제품명:{" "}
                        {item.details.length > 1
                          ? item.details.find((elem, index) => index === 0)
                              ?.productName +
                            `, 외 ${item.details.length - 1}건`
                          : item.details.map((item) => item.productName)}
                        <br />
                        분쇄도:{" "}
                        {item.details.length > 1
                          ? item.details.find((elem, index) => index === 0)
                              ?.groundPoint +
                            `, 외 ${item.details.length - 1}건`
                          : item.details.map((item) => item.groundPoint)}
                        <br />
                        주문수량:{" "}
                        {item.details.length > 1
                          ? item.details.find((elem, index) => index === 0)
                              ?.orderQuantity +
                            `개` +
                            `, 외 ${item.details.length - 1}건`
                          : item.details.map((item) => item.orderQuantity)}
                        개
                        <br />
                        구독기간:{" "}
                        {item.details.length > 1
                          ? item.details.find((elem, index) => index === 0)
                              ?.term +
                            `주` +
                            `, 외 ${item.details.length - 1}건`
                          : item.details.map((item) => item.term)}
                        주
                        <br />
                        제품단가:{" "}
                        {item.details.length > 1
                          ? item.details.find((elem, index) => index === 0)
                              ?.productPrice +
                            `원` +
                            `, 외 ${item.details.length - 1}건`
                          : item.details.map((item) =>
                              new Intl.NumberFormat().format(item.productPrice)
                            )}
                        원
                        <br />
                        주문금액:{" "}
                        {new Intl.NumberFormat().format(item.totalPayment)}원
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
                        requestFetchNextSubscribe({
                          partnerId: partner.data.partnerId,
                          page: subscribe.page + 1,
                          size: subscribe.pageSize,
                        })
                      );
                    }}
                  >
                    더보기
                  </button>
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