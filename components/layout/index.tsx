import Link from "next/link";
import React from "react";
import Post from "../../pages/post/[slug]";
import { formatDate } from "../../utils";
import Footer from "../footer";
import Header from "../header";
import styles from "./styles.module.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.page}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
