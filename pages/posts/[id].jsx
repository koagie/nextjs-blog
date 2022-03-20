import Layout from "../../components/Layout"
import { getAllPostIds } from "../../lib/post";

// async = 非同期処理  getStaticPathsでpathを設定
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    //設定値以外は404にする
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  
}

export default function Post() {
  return  <Layout>動的ルーティング設定</Layout>;
}