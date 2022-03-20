import Head from "next/head";
import Link from "next/link";
import { Children } from "react";
import styles from "./layout.module.scss"
import utilStyles from "../styles/utils.module.scss"

const name = "kogiblo";
export const siteTitle = "Next.js kogiblo";

//共通部分を実装
function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="stylesheet" href="/favicon.ico" /> */}
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* <img className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} src="/images/kogi.jpg" /> */}
            <h1 className={utilStyles.heading2Xl}>{ name }</h1>
          </>
        ) : (
          <>
            {/* <img className={utilStyles.borderCircle} src="/images/kogi.jpg" /> */}
            <h1 className={utilStyles.heading2Xl}>{ name }</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* home出ない場合すべてに適用 */}
      {!home && (
        <div>
          <Link href="/">go to home</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
