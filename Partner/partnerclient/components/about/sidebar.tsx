import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../about/sidebar.module.css";
import Profile from "../profile/profile";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Head>
        <title>파트너메인</title>
      </Head>
      <div className="mx-auto">
        <Profile />
      </div>
      <Link href="/registration">
        <a>입점신청</a>
      </Link>
      <Link href="/product/edit/create">
        <a>제품등록</a>
      </Link>
      <Link href="/product">
        <a>제품목록</a>
      </Link>
      <Link href="/subscribe">
        <a>주문관리</a>
      </Link>
    </nav>
  );
}
