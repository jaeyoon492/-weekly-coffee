import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from "../components/about/sidebar";
import AppBar from "../components/appbar";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <header>
          <AppBar />
        </header>
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
