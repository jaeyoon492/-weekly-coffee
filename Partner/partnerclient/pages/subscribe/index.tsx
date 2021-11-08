import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { requestFetchMember } from "../../middleware/modules/member";
import { AppDispatch, RootState } from "../../provider";

const Subscribe = () => {
  const dispatch = useDispatch<AppDispatch>();

  // const memberId = useSelector((state: RootState) => state.member.memberId);

  // console.log(memberId);

  // useEffect(() => {
  //   dispatch(requestFetchMember(1));
  // }, []);

  return (
    <>
      <DashboardContent>
        <article style={{ width: "90%" }} className="mx-auto mt-4">
          <section>
            <h1 className="">주문 목록</h1>
            <div className="d-flex justify-content-md-center mt-4"></div>
          </section>
        </article>
      </DashboardContent>
    </>
  );
};

export default Subscribe;
