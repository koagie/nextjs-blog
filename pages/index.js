import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/Layout';
import Link from "next/link";
import utilStyle from "../styles/utils.module.scss";
import { getPostsData } from "../lib/post.jsx";

//SSG => Take data only once from the outside
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    }
  }
}

export default function home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <p>
        フルスタックエンジニアのkogiです。
        </p>
      </section>

      <section>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              {/* blog image */}
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`}  className={styles.thumbnailImage} />
              </Link>
              {/* blog title */}
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              {/* date */}
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
          <article>
          </article>
        </div>
      </section>
    </Layout>

  );
}



//SSR example　リエストが多くある場合、外部データを取り扱う場合はこっちが必要
// export async getServerSideProps(context) {
//   return (
//     props: {
//       //コンポーネントに渡すためのprops これがallPostsDataへ送られる
//     }
//   )
// }