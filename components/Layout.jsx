import Head from "next/head";
import { Children } from "react";
import styles from "./layout.module.scss"
import utilStyles from "../styles/utils.module.scss"

const name = "kogiblo";
export const siteTitle = "Next.js kogiblo";

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="stylesheet" href="/favicon.ico" /> */}
      </Head>
      <header className={styles.header}>
        {/* <img className={utilStyles.borderCircle} src="/images/kogi.jpg" /> */}
        <h1 className={utilStyles.heading2Xl}>{ name }</h1>
        <h2></h2>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
