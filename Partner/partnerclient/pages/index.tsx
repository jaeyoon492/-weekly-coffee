import type { NextPage } from 'next'
import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <h1>접속 첫화면</h1>
      </section>
    </Layout>
  );
};

export default Home;
