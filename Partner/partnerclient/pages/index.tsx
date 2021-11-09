import type { NextPage } from 'next'
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardContent from "../components/material/Dashboard";
import { requestFetchMember } from "../middleware/modules/member";
import { requestFetchPartner } from "../middleware/modules/partner";
import { AppDispatch, RootState } from "../provider";

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const partnerId = useSelector(
    (state: RootState) => state.member.data.partner?.partnerId
  );
  const partner = useSelector(
    (state: RootState) => state.member.data.partnerState
  );

  function memberFetch() {
    dispatch(requestFetchMember(1));
  }
  function partnerFetch() {
    if (partnerId) {
      dispatch(requestFetchPartner(partnerId));
    } else {
      console.log("조회된 파트너가 없습니다");
    }
  }

  function start() {
    console.log("초기화면 멤버패치");
    memberFetch();
  }
  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    console.log("초기화면 파트너 패치");
    partnerFetch();
  }, [partner]);

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
