import Head from "next/head";

import React from "react";
import styles from "./layout.module.css";
import AppBar from "./appbar";

import Progress from "./progress";
import AlertStack from "./alert/alertStack";
import Sidebar from "./about/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <article className={styles.article}>
        <Head>
          <title>Myworkspace</title>
        </Head>
        <header>
          <AppBar />
        </header>
        <div style={{ height: "800px" }} className="d-flex">
          <Sidebar />
          <main className={styles.main}>
            {children}
            <Progress />
            <AlertStack />
          </main>
        </div>
        <footer>푸터요</footer>
      </article>
    </>
  );
}
