import type { NextPage } from 'next'
import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";
import DashboardContent from "../components/material/Dashboard";

const Home: NextPage = () => {
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
