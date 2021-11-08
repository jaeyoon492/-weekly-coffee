import type { NextPage } from 'next'
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../components/material/Dashboard";
import { requestFetchMember } from "../middleware/modules/member";
import { AppDispatch, RootState } from "../provider";

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const partnerState = useSelector(
    (state: RootState) => state.member.partnerState
  );
  const memberId = useSelector((state: RootState) => state.member.memberId);

  useEffect(() => {
    if (partnerState) {
      dispatch(requestFetchMember(1));
    }
  }, [partnerState]);

  useEffect(() => {
    dispatch(requestFetchMember(1));
  }, []);

  return (
    <>
      <DashboardContent>
        <section>
          <h1>접속 첫화면</h1>
        </section>
      </DashboardContent>
    </>
  );
};

export default Home;
