import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/post";

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
  return  <Layout>
    {postData.title}
    <br />
    {postData.date}
    <br />
    {postData.blogContentHTML}
    </Layout>;
}