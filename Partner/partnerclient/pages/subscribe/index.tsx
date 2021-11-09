import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../../components/material/Dashboard";
import { requestFetchMember } from "../../middleware/modules/member";
import { AppDispatch, RootState } from "../../provider";

const Subscribe = () => {
  const dispatch = useDispatch<AppDispatch>();

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
