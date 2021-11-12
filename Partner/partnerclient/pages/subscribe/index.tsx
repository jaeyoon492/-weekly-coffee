import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { getTimeString } from "../../lib/string";
import { requestFetchSubscribe } from "../../middleware/modules/subscribe";
import { AppDispatch, RootState } from "../../provider";

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

  return (
    <>
      <DashboardContent>
        <article style={{ width: "90%" }} className="mx-auto mt-4">
          <section>
            <h1 className="">주문 목록</h1>
            <div className=" justify-content-md-center w-75  mt-4">
              {subscribe.data.map((item, index) => (
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
                      구독기간: {item.details.map((item) => item.term) + "개월"}
                      <br />
                      주문시각: {getTimeString(item.createdTime)}
                      <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
              {!subscribe.isLast && (
                <div className="d-flex justify-content-center mt-4">
                  <a
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault(); // 기본 동작 방지
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
                  </a>
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
