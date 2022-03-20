import path from "path";
import fs from "fs";
import matter from "gray-matter";

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
      //.data必要
      ...matterResult.data,
    };
  });
  //getPostsData関数の返り値
  return allPostsData;
}