import Head from "next/head";
import { Children } from "react";
import styles from "./layout.module.scss"
import utilStyles from "../styles/utils.module.scss"

const name = "shin Code";
export const siteTitle = "Next.js blog";

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="stylesheet" href="/favicon.ico" /> */}
      </Head>
      <header className={styles.header}>
        <img className={utilStyles.borderCircle} src="/images/profile.png" />
        <h1 className={utilStyles.heading2Xl}>{ name }</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
