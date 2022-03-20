import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

//get md file data
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    //get markdown's data as character 
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //analize markdown metadata with matter
    const matterResult = matter(fileContents);

    //allPostData変数の返り値
    return {
      id,
      // ...~~~ = Spread syntax
      //.dataが必要
      ...matterResult.data,
    };
  });
  //getPostsData関数の返り値
  return allPostsData;
}

//getStaticPath returnで誓うApathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//idでdataをとって来る
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  //matterResult.data はmetaデータ　matterResult.content　は本文
  const matterResult = matter(fileContent);

  //awaitで非同期処理する　この時はasyncがfunctionの前に必要
  //markdownを読み込んでhtmlで解析する
  const blogContent = await remark().use(html).process(matterResult.content);
  //blogContentをstring型に直す
  const blogContentHTML = blogContent.toString();

  //上記で準備したデータを返す
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}

//SSR example　リエストが多くある場合、外部データを取り扱う場合はこっちが必要
// export function getPostsData() {
//   const fetchData = await fetch("endpoint");
// }