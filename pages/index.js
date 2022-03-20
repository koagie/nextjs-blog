import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from "next/link"
import utilStyle from "../styles/utils.module.scss"


export default function home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
        フルスタックエンジニアのkogiです。
        </p>
      </section>
      <section>
        <h2>kogiblo</h2>
        <div className={styles.grid}>
          <article>
            {/* blog image */}
            <Link href="/">
            <img src="/images/thumbnail01.jpg"  className={styles.thumbnailImage} />
            </Link>
            {/* blog title */}
            <Link href="/">
              <a className={utilStyle.boldText}>title01title01title01</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              2022.02.23
            </small>
          </article>
          <article>
            {/* blog image */}
            <Link href="/">
            <img src="/images/thumbnail01.jpg"  className={styles.thumbnailImage} />
            </Link>
            {/* blog title */}
            <Link href="/">
              <a className={utilStyle.boldText}>title01title01title01</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              2022.02.23
            </small>
          </article>
          <article>
            {/* blog image */}
            <Link href="/">
            <img src="/images/thumbnail01.jpg"  className={styles.thumbnailImage} />
            </Link>
            {/* blog title */}
            <Link href="/">
              <a className={utilStyle.boldText}>title01title01title01</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              2022.02.23
            </small>
          </article>
          <article>
            {/* blog image */}
            <Link href="/">
            <img src="/images/thumbnail01.jpg"  className={styles.thumbnailImage} />
            </Link>
            {/* blog title */}
            <Link href="/">
              <a className={utilStyle.boldText}>title01title01title01</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              2022.02.23
            </small>
          </article>
        </div>
      </section>
    </Layout>

  );
}