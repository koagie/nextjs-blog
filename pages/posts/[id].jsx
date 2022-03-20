import Head from 'next/head';
import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.scss"
//htmlをサニタイズする
import DOMPurify from "dompurify";


// async = 非同期処理  getStaticPathsでpathを設定
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    //設定値以外は404にする
    fallback: false,
  }
}

//getPostDataはpost.jsxで非同期処理で行うためawait 必要
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="{utilStyles.headingX1">{postData.title}</h1>
        <div className="utilStyles.lightText">{postData.date}</div>
        <div dangerouslySetInnerHTML={{
          //サニタイズ必須
          // __html: DOMPurify.sanitize(postData.blogContentHTML)
          __html: postData.blogContentHTML
        }}/>
      </article>
    </Layout>
  ) 
}